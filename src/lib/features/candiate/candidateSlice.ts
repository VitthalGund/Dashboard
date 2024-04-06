import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.withCredentials = true;

export const getAssignmentInfo = createAsyncThunk(
  "get/admin/roles/get_all",
  async (data) => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const getCandidateInfo = createAsyncThunk(
  "get/admin/roles/get_all",
  async (data: { id: number; assignmentId: number }) => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${data.id}&assignment_id=${data.assignmentId}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const getCandidatesList = createAsyncThunk(
  "get/admin/roles/get_all",
  async (data) => {
    try {
      const res = await axios.get(
        `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0`
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all emps ===============================================
      .addCase(getAssignmentInfo.pending, (state, action) => {
        // state.status.getAllEmployee = LOADING;
        state.loading = true;
      })
      .addCase(getAssignmentInfo.fulfilled, (state, { payload }) => {
        switch (payload) {
          default:
            state.assignmentInfo = payload.data;
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
        // state.status.getAllEmployee = LOADING;
        state.loading = true;
      })
      .addCase(getCandidateInfo.fulfilled, (state, { payload }) => {
        switch (payload) {
          default:
            state.candidateInfo = payload.data;
            state.status.getCandidateInfo = "FULFILLED";
            state.loading = false;
            break;
        }
      })
      .addCase(getCandidateInfo.rejected, (state, action) => {
        state.loading = false;
        state.status.getCandidateInfo = "ERROR";
      })
      .addCase(getAssignmentInfo.pending, (state, action) => {
        // state.status.getAllEmployee = LOADING;
        state.loading = true;
      })
      .addCase(getCandidatesList.fulfilled, (state, { payload }) => {
        switch (payload) {
          default:
            state.candidateList = payload.data;
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
export const {} = candidateSlice.actions;
