import { Button } from "@mui/material"
import React  from "react"
type SuperButtonPropsType = {
  width?: string
  variant?:string
  borderRadius?: string
  color?: "primary" | "secondary"
  text: string
  startIcon?: any
  type?: "submit"
  onClick?: () => void
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  variant,
  width,
  borderRadius,
  color,
  text,
  startIcon,
  onClick,
  type,
}) => {
  const buttonStyle = {
    width: `${width}`,
    borderRadius: `${borderRadius}`,
  }

  const onClickCallBack = () => {
    onClick?.()
  }

  return (
    <Button
      variant={"contained" || variant }
      color={color || "primary"}
      sx={buttonStyle}
      startIcon={startIcon}
      type={type || "button"}
      onClick={onClickCallBack}
    >
      {text}
    </Button>
  )
}
