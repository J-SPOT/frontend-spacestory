export interface CategoryType {
  id: number;
  name: string;
  subCategories: SubCategoryType[];
}

export interface SubCategoryType {
  id: number;
  name: string;
}
