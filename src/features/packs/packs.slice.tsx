import { createSlice } from "@reduxjs/toolkit"
import {
  ArgGetPacksParamsType,
  ArgNewCardsPackType,
  GetPackResponseType,
  PackType,
  PacksAPI,
} from "./packs.api"
import { thunkTryCatch } from "./../../common/utils/thunkTryCatch"
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk"
import { act } from "react-dom/test-utils"

const getPacks = createAppAsyncThunk<
  GetPackResponseType,
  ArgGetPacksParamsType
>("pack/getPacks", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await PacksAPI.getPacks(data)
    return res.data
  })
})

const addNewCardPack = createAppAsyncThunk<PackType, ArgNewCardsPackType>(
  "pack/addNewCardPack",
  async (data, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await PacksAPI.addNewCardPack(data)
      return { newCardsPack: res.data }
    })
  },
)

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
      sortPacks: "0updated",
    } as ArgGetPacksParamsType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacks.fulfilled, (state, action) => {
      console.log("action.payload")
      console.log(action.payload)
      state.packs = action.payload
    }),
      builder.addCase(addNewCardPack.fulfilled, (state, action) => {
        state.packs.cardPacks.unshift(action.payload)
      })
  },
})

export const packReducer = slice.reducer
export const packThunk = { getPacks, addNewCardPack }
