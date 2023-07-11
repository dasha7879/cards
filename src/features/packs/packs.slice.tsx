import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {
  ArgNewCardsPackType,
  GetPackResponseType,
  PackType,
  idPackType,
  packsAPI,
  paramsType,
  updatePackType,
} from "./packs.api"
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk"
import { thunkTryCatch } from "../../common/utils/thunkTryCatch"

const getData = createAppAsyncThunk<GetPackResponseType, paramsType>(
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
      return res.data.newCardsPack
    })
  },
)

const deletePack = createAppAsyncThunk<PackType, idPackType>(
  "packs/deletePack",
  async (params, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.deletePack(params)
      console.log(res.data)
      return res.data.deletedCardsPack
    })
  },
)

const upDatePack = createAppAsyncThunk<PackType, updatePackType>(
  "packs/upDatePack",
  async (cardsPack, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const res = await packsAPI.upDatePack(cardsPack)
      console.log(res.data.updatedCardsPack)

      return res.data.updatedCardsPack
    })
  },
)

const slice = createSlice({
  name: "packs",
  initialState: {
    cardPacks: [] as PackType[],
    cardPacksTotalCount: 14,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
    params: {
      packName: "",
      min: "0",
      max: "",
      sortPacks: "",
      page: "",
      pageCount: "",
      user_id: "",
      block: false,
    } as paramsType,
  },
  reducers: {
    setParams: (state, action: PayloadAction<paramsType>) => {
      state.params = action.payload
    },
    getParams: (state, action: PayloadAction<paramsType>) => {
      state.params = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        return state = { ...state, ...action.payload }
      })
      .addCase(addPack.fulfilled, (state, action) => {
        state.cardPacks.unshift(action.payload)
      })
      .addCase(deletePack.fulfilled, (state, action) => {
        state.cardPacks = state.cardPacks.filter(
          (pack) => pack._id !== action.payload._id,
        )
        // const index = state.cardPacks.findIndex(
        //   (pack) => pack._id === action.payload._id,
        // )
        // state.cardPacks.splice(index, 1)
      })
      .addCase(upDatePack.fulfilled, (state, action) => {
        state.cardPacks.forEach((el) => {
          el._id === action.payload._id ? (el.name = action.payload.name) : el
        })
      })
  },
})

export const dataActions = slice.actions
export const dataReducer = slice.reducer
export const dataThunks = { getData, addPack, deletePack, upDatePack }
