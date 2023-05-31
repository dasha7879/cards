import { React } from "react"

declare module "@mui/material/styles" {
  interface ThemeOptions {
    shape: { borderRadius: number }
  }
}
