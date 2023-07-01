import { PacksSettings } from "./PacksSettings"
import { PacksTable } from "../../../../common/components/PacksTable"
import { PackNavigator } from "../../../../common/components/PackNavigator"
import { Container } from "@mui/material"
import { PacksTable } from "./PacksTable"
import { PackNavigator } from "./PackNavigator"

export const Packs = () => {
  return (
    <Container maxWidth="lg">
      <PackNavigator title={"Packs list"} buttonText={"Add new pack"} />
      <PacksSettings />
      <PacksTable />
    </Container>
  )
}
