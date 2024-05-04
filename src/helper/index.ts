import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/";
export const getAssignmentInfo = async () => {
  try {
    const res = await axios.get(`/assignment_details`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getCandidateInfo = async (data: {
  id: number;
  assignmentId: string;
}) => {
  try {
    const res = await axios.get(
      `/candidate_assignment_data?user_id=${data.id}&assignment_id=${data.assignmentId}`,
      {
        withCredentials: false,
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getCandidatesList = async () => {
  try {
    const res = await axios.get(
      `/assignment_candidates?status=review&limit=10&offset=0`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
