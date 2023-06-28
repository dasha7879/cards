import Box from "@mui/material/Box"
import { SearchInput } from "../../../common/components/SearchInput"
import { ShowPacksCards } from "../../../common/components/ShowPacksCards"
import { NumberOfCards } from "../../../common/components/NumberOfCards"
import { ClearFilter } from "../../../common/components/ClearFilter"

export const PacksSettings = () => {
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
      <SearchInput onChange={() => {}} />
      <ShowPacksCards />
      <NumberOfCards />
      <ClearFilter clearFiltersHandler={() => {}} />
    </Box>
  )
}
