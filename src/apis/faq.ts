import { axios } from "@/lib/axios";

export interface LocalizedText {
  ar: string;
  en: string;
}

export interface Faq {
  id: number;
  question: LocalizedText;
  answer: LocalizedText;
  is_active: number;
  order_column: number;
  created_at: string;
  updated_at: string;
  country_id: number | null;
  type: string;
  useful_uses_count: number;
  unuseful_uses_count: number;
  tenant_id: number | null;
}

export interface PaginationMeta {
  current_page: number;
  current_page_url: string;
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
}

export interface FaqResponse extends PaginationMeta {
  data: Faq[];
}

export const getBusinessFaqs = async (
  page: number = 1
): Promise<FaqResponse> => {
  const { data } = await axios.get<FaqResponse>(
    "/web/business/faqs",
    { params: { page } }
  );

  return data;
};
