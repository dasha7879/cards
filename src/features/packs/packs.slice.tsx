import { createSlice } from "@reduxjs/toolkit"
import {  ArgGetPacksParamsType, GetPackResponseType, PacksAPI } from "./packs.api"
import { thunkTryCatch } from './../../common/utils/thunkTryCatch';
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk";

const getPacks = createAppAsyncThunk<
  { pack: GetPackResponseType }, ArgGetPacksParamsType 
>("pack/getPacks", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await PacksAPI.getPacks(data)
    return { pack: res.data }
  })
})


const slice = createSlice({
  name: "pack",
  initialState: {
    packs: {} as GetPackResponseType,
    params: {
      packName: "",
      min: "0",
      max: "100",
      page: "1",
      pageCount: "5",
      user_id: "",
      sortPacks: "0updated"
    } as  ArgGetPacksParamsType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacks.fulfilled, (state, action)=> {
      state.packs = action.payload.pack
    })
  },
})

export const packReducer = slice.reducer
export const packThunk = { getPacks }