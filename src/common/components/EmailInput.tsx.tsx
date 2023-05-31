import TextField from "@mui/material/TextField"
export type EmaileInputType = any
export const EmailInput:React.FC<EmaileInputType > = ({}) => {
  return <TextField id="standard-basic" label="Email" variant="standard" sx={{opacity:0.6}}/>
}
