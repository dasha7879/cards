import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper/Paper"
import TextField from "@mui/material/TextField/TextField"
import Typography from "@mui/material/Typography/Typography"
import { useForm } from "react-hook-form"
import { SuperButton } from "./SuperButton"
import Stack from "@mui/material/Stack/Stack"
import { packsThunks } from "../../features/packs/packs.slice"
import { useAppDispatch } from "../hooks"
import { path } from "../routes/paths"
import { useNavigate } from "react-router-dom"
import { EmailInput } from "./EmailInput.tsx"

type CreatePackType = {}
export type FormData = {
  namePack: string
}

export const CreatePack: React.FC<CreatePackType> = ({}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const CreateNewPack = (data: FormData) => {
    dispatch(packsThunks.addPack({ name: data.namePack }))
    navigate(path.PACKS)
  }

  const paperStyle = {
    padding: 33,
    minHeight: "55vh",
    maxHeigth: "60vh",
    width: 413,
    margin: "20px auto",
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      namePack: "",
    },
  })

  const onSubmit = (data: FormData) => {
    CreateNewPack(data)
    console.log(data)
  }

  return (
    <Paper elevation={5} style={paperStyle}>
      <Typography variant="h1" textAlign={"center"}>
        Create a new Pack
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          paddingTop={"50px"}
          spacing={3}
          width={400}
          display={"flex"}
          justifyContent={"center"}
        >
          {/* <TextField
            id="standard-basic"
            label="namePack"
            variant="standard"
            sx={{ opacity: 0.6 }}
            {...register()}
          /> */}
          поработать над лейблом и компонентой
          <EmailInput name="namePack" register={register} /> 
          <SuperButton
            width={"100%"}
            text={"Add New Pack"}
            borderRadius="30px"
            type="submit"
          />
        </Stack>
      </form>
    </Paper>
  )
}
