import { createSlice } from "@reduxjs/toolkit"
import { CardType, CardsParamsType } from "./cards.api"

const slice = createSlice({
  name: "cards",
  initialState: {
    cardPacks: [] as CardType[],
    cardPacksTotalCount: 14,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
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
  reducers: {},
  extraReducers: () => {},
})

export const cardsReducer = slice.reducer
