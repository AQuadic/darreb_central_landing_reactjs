import { axios } from "@/lib/axios";

// Localized text
export interface LocalizedText {
  ar: string;
  en: string;
}

// Benefit
export interface Benefit {
  name: LocalizedText;
}

// Business Package
export interface BusinessPackage {
  id: number;
  type: string;
  tenant_id: number | null;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  discount: number;
  duration: number;
  is_active: boolean;
  is_popular: boolean;
  benefits: Benefit[];
  created_at: string;
  updated_at: string;
  is_public: boolean;
}

// Pagination Meta
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

// API Response
export interface BusinessPackageResponse extends PaginationMeta {
  data: BusinessPackage[];
}

// Fetch function
export const fetchBusinessPackages = async (
  page: number = 1
): Promise<BusinessPackageResponse> => {
  const { data } = await axios.get<BusinessPackageResponse>(
    `/web/business/package?page=${page}`
  );
  return data;
};
