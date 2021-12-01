import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";

export const BackgroundGrid = styled(Grid, {
    name: "BackgroundGrid",
    slot: "Wrapper"
})({
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    backgroundColor: blue[200]
})