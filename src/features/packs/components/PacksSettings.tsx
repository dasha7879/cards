import { ClearFilter } from "../../../common/components/ClearFilter"
import { NumberOfCards } from "../../../common/components/NumberOfCards"
import { ShowPacksCards } from "../../../common/components/ShowPacksCards"
import { SearchInput } from "../../../common/components/SearchInput"
import Box from "@mui/material/Box"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"
import { packActions, packsThunks } from "../packs.slice"

export const PacksSettings = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.auth.profile?._id)
  const params = useAppSelector((state) => state.packs.params)

  const onClickMy = () => {
    // console.log(params)
    dispatch(packActions.setParams({ ...params, user_id: userId }))
    //
    dispatch(packsThunks.getPacks({ ...params, user_id: userId }))
  }
  const onClickAll = () => {
    dispatch(packActions.setParams({ ...params, user_id: undefined }))
    dispatch(packsThunks.getPacks({ ...params, user_id: undefined }))
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width="100%"
      margin="0 auto"
      padding=" 40px 0 24px 0 "
    >
      <SearchInput />
      <ShowPacksCards onClickMy={onClickMy} onClickAll={onClickAll} />
      <NumberOfCards />
      {/* <ClearFilter /> */}
    </Box>
  )
}
