import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import createTheme
import router from "./router";

// Create a theme instance
const theme = createTheme({
  // You can customize your theme here. For example:
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
    main: '#19857b',
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}> 
    <RouterProvider router={router} />
  </ThemeProvider>
);