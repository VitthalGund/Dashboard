import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.withCredentials = true;

export const getAssignmentInfo = createAsyncThunk(
  "get/getAssignmentInfo",
  async () => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details`,
        {
          withCredentials: false,
        }
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const getCandidateInfo = createAsyncThunk(
  "get/getCandidateInfo",
  async (data: { id: number; assignmentId: string }) => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${data.id}&assignment_id=${data.assignmentId}`,
        {
          withCredentials: false,
        }
      );
      // console.log(res);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const getCandidatesList = createAsyncThunk(
  "get/getCandidatesList",
  async () => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0`,
        {
          withCredentials: false,
        }
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  loading: false,
  errorData: {
    message: "",
    type: "",
    errors: [],
  },
  isError: false,
  candidateList: [],
  candidateInfo: {},
  assignmentInfo: {},
  currentId: -1,
  status: {
    getAssignmentInfo: "IDLE",
    getCandidateInfo: "IDLE",
    getCandidatesList: "IDLE",
  },
  data: {
    allEmps: [],
    roles: [],
  },
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState: initialState,
  reducers: {
    setId: (state, action) => {
      // console.log({ state, action });
      state.currentId = action.payload;
    },
    getCandidateInfoSuccess: (state, action) => {
      state.candidateInfo = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all emps ===============================================
      .addCase(getAssignmentInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAssignmentInfo.fulfilled, (state, { payload }) => {
        switch (payload) {
          default:
            state.assignmentInfo = payload;
            state.status.getAssignmentInfo = "FULFILLED";
            state.loading = false;
            break;
        }
      })
      .addCase(getAssignmentInfo.rejected, (state, action) => {
        state.loading = false;
        state.status.getAssignmentInfo = "ERROR";
      })
      .addCase(getCandidateInfo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCandidateInfo.fulfilled, (state, { payload }) => {
        // console.log({ payload });
        switch (payload) {
          default:
            state.candidateInfo = payload;
            state.status.getCandidateInfo = "FULFILLED";
            state.loading = false;
            break;
        }
      })
      .addCase(getCandidateInfo.rejected, (state, action) => {
        state.loading = false;
        state.status.getCandidateInfo = "ERROR";
      })
      .addCase(getCandidatesList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCandidatesList.fulfilled, (state, { payload }) => {
        // console.log(payload);
        switch (payload) {
          default:
            state.candidateList = payload.sort(
              (a: any, b: any) => b.score - a.score
            );
            setId(state.candidateList?.[0]["id"]);
            state.status.getCandidatesList = "FULFILLED";
            state.loading = false;
            break;
        }
      })
      .addCase(getCandidatesList.rejected, (state, action) => {
        state.loading = false;
        state.status.getCandidatesList = "ERROR";
      });
  },
});

export default candidateSlice.reducer;
export const { setId } = candidateSlice.actions;
