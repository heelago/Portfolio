export enum Category {
  HAYARKON = 'Hayarkon',
  DOG_BEACH = 'Dog Beach',
  OTHER = 'Other'
}

export interface Photo {
  id: string;
  url: string;
  category: Category;
  description?: string;
}