import { Container } from "@mui/material"
import { CardsTable } from "./components/CardsTable"
import { PackNavigator } from "../packs/components/PackNavigator"
import { SuperButton } from "../../common/components/SuperButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"
import { path } from "../../common/routes/paths"
import { SearchInput } from "../../common/components/SearchInput"
import { useAppSelector } from "../../common/hooks"

export const Cards = () => {
  const navigate = useNavigate()

  const onClickPacks = () => {
    navigate(path.PACKS)
  }

  return (
    <Container maxWidth="lg" >
      <SuperButton
        variant="text"
        startIcon={<ArrowBackIcon />}
        text={"Back to Packs List"}
        borderRadius="30px"
        onClick={onClickPacks}
      />
      <PackNavigator title={"Cards list"} buttonText={"Learn pack"} />
      <SearchInput fullWidth cards />
      <CardsTable />
    </Container>
  )
}
