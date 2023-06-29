import { ClearFilter } from "../../../common/components/ClearFilter"
import { NumberOfCards } from "../../../common/components/NumberOfCards"
import { ShowPacksCards } from "../../../common/components/ShowPacksCards"
import { SearchInput } from "../../../common/components/SearchInput"
import Box from "@mui/material/Box"


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
      <SearchInput />
      {/* <ShowPacksCards  onMy={true} setOnMy={() => {}} /> */}
      <ShowPacksCards />
      <NumberOfCards />
      <ClearFilter clearFiltersHandler={() => {}} />
    </Box>
  )
}
