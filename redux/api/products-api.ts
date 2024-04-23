import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/config";

export const productsApi = createApi({
  reducerPath: "productsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getProducts: builder.query<ProductProps[], void>({
      query: () => "/products",
    }),

    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),

    getProductById: builder.query<ProductProps, string>({
      query: (id) => `/products/${id}`,
    }),

    getProductsByCategory: builder.query<ProductProps[], string>({
      query: (categoryName) => `/products/category/${categoryName}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
