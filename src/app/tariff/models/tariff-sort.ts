
export const SortOptions = [
   { label: '-', value: null },
   { label: 'Download Speed', value: 'downloadSpeed' },
   { label: 'Upload Speed', value: 'uploadSpeed' },
   { label: 'Price', value: 'price' },
 ];

 export enum SortDirection {
  ASC,
  DESC,
}

export interface SortCriteria {
  sortFieldName: string | null,
  sortDirection: SortDirection,
}