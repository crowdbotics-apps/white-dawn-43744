import axios from "axios"
const pubNubAPI = axios.create({
  baseURL: "https://ps.pndsn.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function pubnubapi_get_v1_files_sub_key_channels_channel_files_list(payload) {
  return pubNubAPI.get(`/v1/files/sub_key/channels/channel/files`)
}
function pubnubapi_post_publish_pub_key_sub_key_0_channel_callback_create(
  payload
) {
  return pubNubAPI.post(
    `/publish/pub_key/sub_key/0/channel/callback`,
    payload,
    { params: { store: payload.store, uuid: payload.uuid } }
  )
}
export const apiService = {
  pubnubapi_get_v1_files_sub_key_channels_channel_files_list,
  pubnubapi_post_publish_pub_key_sub_key_0_channel_callback_create
}
