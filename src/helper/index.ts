import axios from "axios";

export const getAssignmentInfo = async () => {
  try {
    const res = await axios.get(
      `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details`
    );
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
      `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${data.id}&assignment_id=${data.assignmentId}`,
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
      `https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
