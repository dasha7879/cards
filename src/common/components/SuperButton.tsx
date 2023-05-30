import Button from "@mui/material/Button"
import { ReactNode } from "react"

type SuperButtonPropsType = {
  name: string
  disabled?: boolean
  textColor?: "white" | "black"
  color?: "primary" | "secondary" | "error"
  width?: string
  callback?: () => void
  onMouseDown?: () => void
  rounded?: boolean
  margin?: string
  icon?: ReactNode
  type?: "button"
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  name,
  disabled,
  textColor,
  color,
  width,
  callback,
  onMouseDown,
  rounded,
  margin,
  icon,
  type,
}) => {

  // const buttonStyle = {
  //   textColor:`${textColor}`,
  //   color: textColor === 'white' ? '#FFFFFF' : '#000000',
  //   width:`${width}`,
  //   borderRadius: rounded ? '30px': '2px',

  // }


  return (
    <>
      <Button variant="contained" name={name} disabled={disabled}>
        Contained
      </Button>
    </>
  )
}
