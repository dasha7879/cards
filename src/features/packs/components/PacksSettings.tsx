import { ClearFilter } from "../../../common/components/ClearFilter"
import { NumberOfCards } from "../../../common/components/NumberOfCards"
import { ShowPacksCards } from "../../../common/components/ShowPacksCards"
import { SearchInput } from "../../../common/components/SearchInput"
import Box from "@mui/material/Box"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"
import { dataActions, dataThunks } from "../packs.slice"

export const PacksSettings = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.auth.profile?._id)
  const params = useAppSelector((state) => state.data.params)
  const onClickMy = () => {
    dispatch(dataActions.setParams({ ...params, user_id: userId }))
    dispatch(dataThunks.getData({ ...params, user_id: userId }))
  }
  const onClickAll = () => {
    dispatch(dataActions.setParams({ ...params, user_id: undefined }))
    dispatch(dataThunks.getData({ ...params, user_id: undefined }))
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
      <SearchInput cards={false}/>
      <ShowPacksCards onClickMy={onClickMy} onClickAll={onClickAll} />
      <NumberOfCards />
      <ClearFilter />
    </Box>
  )
}
