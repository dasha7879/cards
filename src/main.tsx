import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
// import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./common/routes/Routes"
import {createTheme, ThemeProvider} from '@mui/material';


const theme = createTheme({
  palette:{
    primary:{
      main: '#366EFF;'
    },
    secondary:{
      main: '#FFFFFF;'
    }
  },
  typography:{
    h1:{
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: 26
    }
  },
  shape:{borderRadius: 2}
  
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
)
