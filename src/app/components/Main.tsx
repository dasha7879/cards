import React, { useEffect } from "react"
import LinearProgress from "@mui/material/LinearProgress"
import Container from "@mui/material/Container"
import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import { authThunks } from "../../features/auth/auth.slice"
import { useAppDispatch, useAppState } from "../../common/hooks"

export const Main = () => {
  const dispatch = useAppDispatch()
  const { isInitialize, isLoadingApp } = useAppState()

  useEffect(() => {
    dispatch(authThunks.me())
  }, [dispatch])

  return (
    <>
      <Box sx={{ height: "4px" }}>{isLoadingApp && <LinearProgress />}</Box>
      <Container fixed>
        {isInitialize ? <LinearProgress /> : <Outlet />}
      </Container>
    </>
  )
}
