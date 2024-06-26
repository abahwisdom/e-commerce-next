import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types/Product';

// Define a base query function using fetch
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}/api`,
});

// Define an API slice with endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTheProducts: builder.query<Product[], {}>({
      query: () => `products`,
    }),
    // Add more endpoints as needed
  }),
});

// Export API hooks for usage in components
export const { useGetTheProductsQuery } = productsApi;
