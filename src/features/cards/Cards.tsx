import { Container } from "@mui/material"
import { CardsTable } from "./components/CardsTable"


export const Cards = () => {
  return (
    <Container maxWidth="lg">
      {/* <PackNavigator title={"Packs list"} buttonText={"Add new pack"} /> */}
      <CardsTable />
    </Container>
  )
}
