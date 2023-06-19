import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import { packThunk } from "../../features/packs/packs.slice"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { ProfileType } from "../../features/auth/auth.api"

type ShowPacksCardsPropsType = {
  // disabled?: boolean
  // onClick: () => void
  // onMy: boolean
  // setOnMy: (value: boolean) => void
}
// disabled,onMy,setOnMy

export const ShowPacksCards:React.FC<ShowPacksCardsPropsType> = ({}) => {
  

    const dispatch = useAppDispatch()
    const userId =   useAppSelector((state)=>state.auth.profile?._id)
    // console.log(userId);


    
    
  
    // const [searchParams, setSearchParams] = useSearchParams('user_id');

    // const getQuery = searchParams.get('user_id')
    // console.log(getQuery)
  

    const onClickHandler = () => { 
        dispatch(packThunk.getPacks({user_id: userId}))
    }
    const onClickHandler1 = () => { 
        dispatch(packThunk.getPacks({}))
    }


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "500", fontSize: "16px", mb: "8px" }}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="outlined">
        <Button onClick={onClickHandler} >
          My
        </Button>
        <Button onClick={onClickHandler1}>
          All
        </Button>
      </ButtonGroup>
    </Box>
  )
}


