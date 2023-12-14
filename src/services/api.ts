import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantsDataProps } from '../containers/CardListHome'

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
    })
  })
})

export const { useGetFeaturedRestaurantsQuery, useGetRestaurantQuery } = api

export default api
