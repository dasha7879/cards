import { ClearFilter } from "../../../../common/components/ClearFilter"
import { NumberOfCards } from "../../../../common/components/NumberOfCards"
import { ShowPacksCards } from "../../../../common/components/ShowPacksCards"
import { SearchInput } from "../../../../common/components/SearchInput"
import Box from "@mui/material/Box"

export const Packs = () => {
  return (
    <Box display={"flex"} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
        <SearchInput />
        <ShowPacksCards onClick={() => {}} onMy={false} setOnMy={() => {}} />
        <NumberOfCards />
        <ClearFilter clearFiltersHandler={() => {}} />
    </Box>
  )
}
