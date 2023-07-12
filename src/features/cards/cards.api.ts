import { instance } from "../../common/api/commonApi"

export const cardsAPI = {
  getCards: (params: CardsParamsType) => {
    return instance.get<GetCardsResponseType>("cards/card", { params })
  },
  addCard: (cards: ArgNewCardsType) => {
    return instance.post<CommonResponseCardsType>("cards/card", { cards })
  },
  deleteCard: (params: IdCardType) => {
    return instance.delete<CommonResponseCardsType>("cards/card", { params })
  },
  updateCard: (cards: UpdateCardType) => {
    return instance.put<CommonResponseCardsType>("cards/card", { cards })
  },
  updateCardsGrade: (updatedGrade: UpdateCardGradeType) => {
    return instance.put<ResponseGradeType>("cards/grade", { updatedGrade })
  },
}

export type CardsParamsType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}
export type GetCardsResponseType = {
  cards: CardType[]
  cardsTotalCount: 3
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
  packName: string
  packPrivate: boolean
  packDeckCover: null
  packCreated: string
  packUpdated: string
  token: string
  tokenDeathTime: string
}

export type CardType = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: "cards"
  rating: number
  more_id: string
  created: string
  updated: string
  __v: number
}

type ArgNewCardsType = {
  cardsPack_id: string
  question: string
  answer: string
  grade: number
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
}

export type IdCardType = {
  id: string
}

export type UpdateCardType = {
  _id: string
  question: string
}

export type UpdateCardGradeType = {
  grade: number // 1-5
  card_id: string
}

export type ResponseGradeType = {
  updatedGrade: {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
  }
}

export type CommonResponseCardsType = {
  [x in "newCard" | "deletedCard" | "updatedCard"]: CardType
} & {
  token: string
  tokenDeathTime: string
}
