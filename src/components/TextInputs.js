import { Grid, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/system";

export const TextInputs = styled(TextField, {
    name: "TextInputs",
    slot: "Wrapper"
})({
    backgroundColor: '#fff',
    borderRadius:4,
    margin:5
})