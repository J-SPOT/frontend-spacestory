export interface SpaceListResultType {
  content: SpaceType[];
  page: PageInfoType;
}

export interface SpaceType {
  id: number;
  name: string;
  representImage: any;
  hourlyRate: number;
  maxCapacity: number;
  reviewCount: number;
  likeCount: number;
  dong: string;
  hashtags: HashtagType[];
}

export interface SpaceDetailType {
  id: number;
  name: string;
  description: string;
  reservationNotes: string;
  openingTime: string;
  closingTime: string;
  hourlyRate: number;
  size: number;
  maxCapacity: number;
  likeCount: number;
  viewCount: number;
  reviewCount: number;
  imagePaths: string[];
  representImage: any;
  realEstate: RealEstateType;
  subCategories: SubCategoryType[];
  spaceOptions: SpaceOptionType[];
  hashtags: HashtagType[];
}

export interface RealEstateType {
  id: number;
  address: AddressType;
  floor: number;
  hasParking: boolean;
  hasElevator: boolean;
}

export interface AddressType {
  roadAddress: string;
  jibunAddress: string;
  sido: string;
  sigungu: string;
  dong: string;
}

export interface SubCategoryType {
  id: number;
  name: string;
  mainCategory: MainCategoryType;
}

export interface MainCategoryType {
  id: number;
  name: string;
}

export interface SpaceOptionType {
  id: number;
  name: string;
}

export interface HashtagType {
  id: number;
  name: string;
}

export interface TimeType {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface PageInfoType {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface SpaceParamsType {
  page: number;
  size: number;
}

export interface SpaceUpdateParamsType {
  name: string;
  description: string;
  reservationNotes: string;
  openingTime: TimeType;
  closingTime: TimeType;
  hourlyRate: number;
  spaceSize: number;
  maxCapacity: number;
  mainCategory: string;
  subCategories: string[];
  options: string[];
  hashtags: string[];
}

export interface SpaceSearchParamsType {
  query?: string;
  sigungu?: string[];
  min_capacity?: number;
  min_price?: number;
  max_price?: number;
  options?: string[];
  sort?: string;
  page?: number;
  size?: number;
}
