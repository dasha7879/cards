import { instance } from "../../common/api/commonApi"

export const packsAPI = {
  getPacks: (params: paramsType) => {
    return instance.get<GetPackResponseType>("cards/pack", { params })
  },
  addPack: (cardsPack: ArgNewCardsPackType) => {
    return instance.post<CommonResponseType>("cards/pack", { cardsPack })
  },
}

export type paramsType = {
  packName?: ""
  min?: string
  max?: string
  sortPacks?: string
  page?: string
  pageCount?: string
  user_id?: string
  block?: boolean
}

export type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: "pack"
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

export type GetPackResponseType = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type ArgNewCardsPackType = {
  name?: string
  deckCover?: string
  private?: boolean
}

export type CommonResponseType = {
  pack: PackType
  token: string
  tokenDeathTime: string
}
