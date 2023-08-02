import { thunkTryCatch } from './../../common/utils/thunkTryCatch';
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ArgNewCardsType, CardType, CardsParamsType, CommonResponseCardsType, GetCardsResponseType, cardsAPI } from "./cards.api"
import { createAppAsyncThunk } from "../../common/utils/createAppAsyncThunk"

const getCards = createAppAsyncThunk<GetCardsResponseType,CardsParamsType>(
    "cards/getCards",
    async(params,thunkAPI)=>{
        return thunkTryCatch(thunkAPI, async()=>{
            const res = await cardsAPI.getCards(params)
            return res.data
        })
    }
)
const addCard = createAppAsyncThunk<CommonResponseCardsType,ArgNewCardsType>(
    "cards/addCard",
    async(cards,thunkAPI)=>{
        return thunkTryCatch(thunkAPI, async()=>{
            const res = await cardsAPI.addCard(cards)
            return res.data.newCard
        })
    }
)


const slice = createSlice({
  name: "cards",
  initialState: {
    cards: [] as CardType[],
    cardsTotalCount: 3 ,
    maxGrade: 4.987525071790364 ,
    minGrade: 2.0100984354076568 ,
    page: 1 ,
    pageCount: 4 ,
    packUserId: "",
    params:{
        cardAnswer: "",
        cardQuestion: "",
        cardsPack_id: "",
        min: 1,
        max: 4,
        sortCards: "0grade",
        page: 1,
        pageCount: 7,
    } as CardsParamsType
  },
  reducers: {
    setParams: (state, action: PayloadAction<CardsParamsType>) => {
      state.params = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCards.fulfilled, (state,action)=>{
      return state = { ...state, ...action.payload }
    })
    .addCase(addCard.fulfilled,(state,action)=>{
    state.cards.unshift(action.payload.newCard)
    })
  },
})

export const cardsActions = slice.actions
export const cardsReducer = slice.reducer
export const cardsThunks = {getCards, addCard}
