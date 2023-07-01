import { Button } from "@mui/material"
import React from "react"
type SuperButtonPropsType = {
  width?: string
  variant?: "contained" | "text"
  borderRadius?: string
  color?: "primary" | "secondary"
  text: string
  startIcon?: any
  type?: "submit"
  onClick?: () => void
  disabled?: boolean
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
  disabled,
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
      variant={variant || "contained"}
      color={color || "primary"}
      sx={buttonStyle}
      startIcon={startIcon}
      type={type || "button"}
      onClick={onClickCallBack}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
