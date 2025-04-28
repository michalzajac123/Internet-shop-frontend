export interface SubCategory {
  name: string;
  path: string;
}

export interface Category {
  name: string;
  path: string;
  subCategories: SubCategory[];
}