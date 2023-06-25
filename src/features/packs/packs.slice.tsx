import { createSlice } from "@reduxjs/toolkit"
import {
  ArgNewCardsPackType,
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

const addPack = createAppAsyncThunk<PackType, ArgNewCardsPackType>(
  "packs/addPack",
  async (cardsPack, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.addPack(cardsPack)
      console.log(res)
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
    builder
      .addCase(getPacks.fulfilled, (state, action) => {
        state.cardPacks = action.payload.cardPacks
      })
      .addCase(addPack.fulfilled, (state, action) => {
        state.cardPacks.unshift(action.payload)
      })
  },
})

export const packsReducer = slice.reducer
export const packsThunks = { getPacks, addPack }
