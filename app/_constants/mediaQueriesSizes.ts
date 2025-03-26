import { MEDIA_QUERIES, ScreenSizeLabel } from "../_types/mediaQueries";
type mediaQueriesSizesType = {
    query:MEDIA_QUERIES; 
    sizeLabel:ScreenSizeLabel;
    sizePixels:number;
}[]
export const mediaQueriesSizes: mediaQueriesSizesType = [
    {
      query: MEDIA_QUERIES.SM,
      sizeLabel: 'sm',
      sizePixels: 640,
    },
    {
      query: MEDIA_QUERIES.MD,
      sizeLabel: 'md',
      sizePixels: 768,
    },
    {
      query: MEDIA_QUERIES.LG,
      sizeLabel: 'lg',
      sizePixels: 1024,
    },
    {
      query: MEDIA_QUERIES.XL,
      sizeLabel: 'xl',
      sizePixels: 1280,
    },
    {
      query: MEDIA_QUERIES.XXL,
      sizeLabel: '2xl',
      sizePixels: 1536,
    },
    {
      query: MEDIA_QUERIES.XXXL,
      sizeLabel: '3xl',
      sizePixels: 1920,
    },
    {
      query: MEDIA_QUERIES.XXXXL,
      sizeLabel: '4xl',
      sizePixels: 2560,
    },
  ];