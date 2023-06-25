import { createSlice } from "@reduxjs/toolkit"
import {
  GetPackResponseType,
  PackType,
  packsAPI,
  paramsType,
} from "./packs.api"
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk"
import { thunkTryCatch } from "../../common/utils/thunkTryCatch"

const getPacks = createAppAsyncThunk<GetPackResponseType, paramsType>(
  "packs/getPacks",
  async (params, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.getPacks(params)
      return res.data
    })
  },
)

const slice = createSlice({
  name: "packs",
  initialState: {
    cardPacks: [] as PackType[],
    cardPacksTotalCount: 14,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacks.fulfilled, (state, action) => {
      state.cardPacks = action.payload.cardPacks
    })
  },
})

export const packsReducer = slice.reducer
export const packsThunks = { getPacks }
