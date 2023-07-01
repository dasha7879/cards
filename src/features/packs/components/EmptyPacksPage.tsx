import { Container } from "@mui/material"
import { SuperButton } from "../../../common/components/SuperButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useAppDispatch } from "../../../common/hooks"
import { PackNavigator } from "./PackNavigator"

type EmptyPacksPageType = {}
//понять вообзе что за компонента и зачем она нужна

export const EmptyPacksPage: React.FC<EmptyPacksPageType> = ({}) => {
  const dispatch = useAppDispatch()

  const onClickHandler = () => {}
  return (
    <Container maxWidth="lg">
      <SuperButton
        text={"Back to Packs List"}
        variant={"text"}
        startIcon={<ArrowBackIcon />}
      />
      <PackNavigator title={"Name Pack"} buttonText={""} />
      <div>This pack is empty. Click add new card to fill this pack</div>
      <SuperButton
        text={"Add new card"}
        borderRadius="30px"
        onClick={onClickHandler}
      />
    </Container>
  )
}
