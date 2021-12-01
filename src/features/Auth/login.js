import { useQuery } from "@apollo/client"
import { Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { USER_ME } from "./AuthAPI"
import { styled } from "@mui/system"
import { blue } from "@mui/material/colors"
import { BackgroundGrid } from "../../components/BackgroundGrid"
import { TextInputs } from "../../components/TextInputs"

const LoginPage = (props) => {

    return (
        <BackgroundGrid display="flex"
            direction="column"
            justifyContent="center"
            flexDirection='column'
            alignItems="center">
            <Grid item>
                <Box m='auto'><TextInputs label="Username" /></Box>
                <Box m='auto'><TextInputs label="Password" /></Box>
            </Grid>
        </BackgroundGrid>
    )
}

export { LoginPage }