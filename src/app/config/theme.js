import { createTheme } from "@mui/material/styles";

const theme = createTheme(
    {
        shape:{
            borderRadius:10
        },
        palette:{
            mode:localStorage.getItem('dark') ? 'dark':'light'
        }
    }
);


export { theme }