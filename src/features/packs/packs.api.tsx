import { instance } from "../../common/api/commonApi"

export const packsAPI = {
  getPacks: (params: paramsType) => {
    return instance.get<GetPackResponseType>("cards/pack", { params })
  },
  getData: (params: paramsType) => {
    return instance.get<GetPackResponseType>("cards/pack", { params })
  },
  addPack: (cardsPack: ArgNewCardsPackType) => {
    return instance.post<CommonResponseType>("cards/pack", { cardsPack })
  },
  deletePack: (params: idPackType) => {
    return instance.delete<CommonResponseType>("cards/pack", { params })
  },
  upDatePack: (cardsPack: updatePackType) => {
    return instance.put<CommonResponseType>("cards/pack", { cardsPack })
  },
}

export type updatePackType = {
  _id: string
  name?: string
}

export type idPackType = {
  id: string
}

export type paramsType = {
  packName?: string
  min?: string
  max?: string
  sortPacks?: string
  page?: string
  pageCount?: string
  user_id?: string
  block?: boolean
  filter?: boolean
  packId?:string
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
  [x in "newCardsPack" | "deletedCardsPack" | "updatedCardsPack"]: PackType
} & {
  token: string
  tokenDeathTime: string
}
