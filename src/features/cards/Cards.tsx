import { Container } from "@mui/material"
import { CardsTable } from "./components/CardsTable"
import { PackNavigator } from "../packs/components/PackNavigator"
import { SuperButton } from "../../common/components/SuperButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"
import { path } from "../../common/routes/paths"
import { SearchInput } from "../../common/components/SearchInput"
import { useAppDispatch, useAppSelector } from "../../common/hooks"
import { useEffect, useState } from "react"
import { dataActions, dataThunks } from "../packs/packs.slice"
import { cardsActions, cardsThunks } from "./cards.slice"

export const Cards = () => {
  const navigate = useNavigate()
  const params = useAppSelector((state) => state.data.params)
  const cards = useAppSelector((state)=>state.cards)
  const dispatch = useAppDispatch()


  const [packName, setPackName] = useState<string | undefined>("")

  const onClickPacks = () => {
    dispatch(dataActions.setParams({packName:'' }))
    navigate(path.PACKS)
  }

  useEffect(() => {
    setPackName(params.packName)
    console.log(cards);
    
  }, [packName])

  return (
    <Container maxWidth="lg">
      <SuperButton
        variant="text"
        startIcon={<ArrowBackIcon />}
        text={"Back to Packs List"}
        borderRadius="30px"
        onClick={onClickPacks}
      />
      <PackNavigator
        title={"Cards list: " + packName}
        buttonText={"Learn pack"}
      />
      <SearchInput fullWidth cards />
      <CardsTable />
    </Container>
  )
}
