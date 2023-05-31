import { Button } from "@mui/material"
import React from "react"

type SuperButtonPropsType = {
  width: string
  borderRadius?: string
  color?: "primary" | "secondary"
  text: string
  startIcon?: any
  onClick?: () => void
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
  width,
  borderRadius,
  color = "primary",
  text,
  startIcon,
  onClick,
}) => {
  const buttonStyle = {
    width: `${width}`,
    borderRadius: `${borderRadius}`,
  }

  // const onClickCallBack = () => {
  //   onClick()
  // }

  return (
    <Button
      variant="contained"
      color={color}
      sx={buttonStyle}
      startIcon={startIcon}
      // onClick={onClickCallBack}
    >
      {text}
    </Button>
  )
}
