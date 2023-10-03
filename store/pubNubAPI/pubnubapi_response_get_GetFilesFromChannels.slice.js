import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const pubnubapi_get_v1_files_sub_key_channels_channel_files_list = createAsyncThunk(
  "pubnubapi_response_get_GetFilesFromChannels/pubnubapi_get_v1_files_sub_key_channels_channel_files_list",
  async payload => {
    const response = await apiService.pubnubapi_get_v1_files_sub_key_channels_channel_files_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const pubnubapi_response_get_GetFilesFromChannelsSlice = createSlice({
  name: "pubnubapi_response_get_GetFilesFromChannels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        pubnubapi_get_v1_files_sub_key_channels_channel_files_list.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        pubnubapi_get_v1_files_sub_key_channels_channel_files_list.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = action.payload
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        pubnubapi_get_v1_files_sub_key_channels_channel_files_list.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  pubnubapi_get_v1_files_sub_key_channels_channel_files_list,
  slice: pubnubapi_response_get_GetFilesFromChannelsSlice
}
