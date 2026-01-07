import { axios } from "@/lib/axios";

export interface CreateSuggestionPayload {
  title: string;
  message: string;
  type: "business" | "user";
  email?: string;
  phone?: string;
  phone_country?: string;
  company_name?: string;
  type_of_business?: string;
  number_of_branches?: string;
  date?: string;
}

export interface Suggestion {
  id: number;
  title: string;
  message: string;
  type: string;
  read_at: string | null;
  created_at: string;
  is_starred: boolean | null;
  country_id: number | null;
}

export interface CreateSuggestionResponse {
  data: Suggestion;
}

export const createBusinessSuggestion = async (
  payload: CreateSuggestionPayload
): Promise<CreateSuggestionResponse> => {
  const { data } = await axios.post<CreateSuggestionResponse>(
    "/web/business/suggestions",
    payload
  );

  return data;
};
