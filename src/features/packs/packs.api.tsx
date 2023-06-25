import { instance } from "../../common/api/commonApi"

export const packsAPI = {
  getPacks: (params: ArgGetPacksParamsType = {}) => {
    return instance.get<GetPackResponseType>("cards/pack", { params: params })
  },

  addNewCardPack: (newCardsPack: ArgNewCardsPackType) => {
    return instance.post<AddNewPackResponseType>("cards/pack", {
      cardsPack: newCardsPack,
    })
  },
  deletePacks: (id:{id: string}) => {
    return instance.delete<deletePackResponseType>("cards/pack", {
      params: id
    })
  },
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

export type ArgGetPacksParamsType = {
  packName?: string
  min?: string
  max?: string
  sortPacks?: "0updated" | "1updated"
  page?: string
  pageCount?: string
  user_id?: string | undefined
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

export type AddNewPackResponseType = {
  newCardsPack: PackType
  token: string
  tokenDeathTime: string
}
export type deletePackResponseType = {
  deleteCardsPack: PackType
  token: string
  tokenDeathTime: string
}

// export type ArgDeleteCardPackType = {
//   id: string
// }
