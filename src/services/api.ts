import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<RestaurantsDataProps[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<RestaurantsDataProps, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayloadProps>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
