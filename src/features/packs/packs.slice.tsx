import { createSlice } from "@reduxjs/toolkit"
import {
  ArgGetPacksParamsType,
  ArgNewCardsPackType,
  GetPackResponseType,
  PackType,
  packsAPI,
} from "./packs.api"
import { thunkTryCatch } from "./../../common/utils/thunkTryCatch"
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk"

const getPacks = createAppAsyncThunk<
  GetPackResponseType,
  ArgGetPacksParamsType
>("pack/getPacks", async (data, ThunkAPI) => {
  return thunkTryCatch(ThunkAPI, async () => {
    const res = await packsAPI.getPacks(data)
    return res.data
  })
})

const addNewCardPack = createAppAsyncThunk<PackType, ArgNewCardsPackType>(
  "pack/addNewCardPack",
  async (data, ThunkAPI) => {
    return thunkTryCatch(ThunkAPI, async () => {
      const res = await packsAPI.addNewCardPack(data)
      return { newCardsPack: res.data }
    })
  },
)

// const deletePacks = createAppAsyncThunk<PackType, {id: string}>(
//   "pack/deletePacks",
//   async (data, ThunkAPI) => {
//     return thunkTryCatch(ThunkAPI, async () => {
//       const res = await packsAPI.deletePacks(data)
//       console.log(res)
//       return { deleteCardsPack: res.data }
//       // это и есть id
//     })
//   },
// )

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
    builder
      .addCase(getPacks.fulfilled, (state, action) => {
        state.packs = action.payload;
      })
      .addCase(addNewCardPack.fulfilled, (state, action) => {
        state.packs.cardPacks.unshift(action.payload);
      })
      // .addCase(deletePacks.fulfilled, (state,action)=>{
      //   const index = state.packs.cardPacks.findIndex((pack)=> pack._id === action.payload._id);
      //   if (index !== -1) state.packs.cardPacks.splice(index, 1);
      // })

  //     .addCase(removePack.fulfilled, (state, action) => {
  //       const index = state.cardPacks.findIndex((pack) => pack._id === action.payload.packId);
  //       if (index !== -1) state.cardPacks.splice(index, 1);
  //     });
  },
})

export const packReducer = slice.reducer
export const packThunk = { getPacks, addNewCardPack}
