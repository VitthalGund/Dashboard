export type Assignment = {
  duration_in_seconds: number;
  ends_at: number;
  id: string;
  link: string;
  status: string;
  title: string;
};

export type candidate = {
  full_name: string;
  email: string;
  score: number;
  index: number;
  img: string;
  id: number;
};

type scores = {
  max_score: number;
  min_score: number;
  score_type: string;
  user_score: number;
};
export type candidateComplete = {
  full_name: string;
  email: string;
  score: number;
  index: number;
  img: string;
  id: number;
  about_me: string;
  experience: string;
  hobbies: string;
  introduction: string;
  scores: Array<scores>;
};
