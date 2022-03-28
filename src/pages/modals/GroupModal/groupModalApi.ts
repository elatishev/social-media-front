import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupModalApi = createApi({
  reducerPath: "groups",
  tagTypes: ["Groups"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.localhost:3001/" }),
  endpoints: (build) => ({
    getGroups: build.query({
      query: (limit = "") => `groups?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: "Groups", id })),
              { type: "Groups", id: "LIST" },
            ]
          : [{ type: "Groups", id: "LIST" }],
    }),
    addGroup: build.mutation({
      query: (body) => ({
        url: "groups",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Groups", id: "LIST" }],
    }),
    deleteGroup: build.mutation({
      query: (id) => ({
        url: `groups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Groups", id: "LIST" }],
    }),
  }),
});

export const { useGetGroupsQuery, useAddGroupMutation, useDeleteGroupMutation } = groupModalApi;
