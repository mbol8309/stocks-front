import { useLazyQuery, useQuery } from "@apollo/client"
import { Alert, Grid, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { USER_LOGIN, USER_ME } from "./AuthAPI"
import { styled } from "@mui/system"
import { blue } from "@mui/material/colors"
import { BackgroundGrid } from "../../components/BackgroundGrid"
import { TextInputs } from "../../components/TextInputs"
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab"
import { apollo_nauth_client}  from '../../app/apollo'

const LoginPage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [setLogin,{ error : loginErrors, data, loading : loginLoading, refetch}] = useLazyQuery(USER_LOGIN,{
        displayName:'login',
        fetchPolicy:'network-only',
        client:apollo_nauth_client
    })

    const onSubmit = (data) => {
        setLogin({variables:data})
    }

    return (
        <BackgroundGrid display="flex"
            direction="column"
            justifyContent="center"
            flexDirection='column'
            alignItems="center">
            <Grid item>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Box m='auto'>
                        <TextInputs
                            name='username'
                            label="Username"
                            required={true}
                            {...register("username")}
                        />
                    </Box>
                    <Box m='auto'>
                        <TextInputs
                            name='password'
                            label="Password"
                            required={true}
                            type='password'
                            {...register("password")}
                        />
                        {errors.password && <span>This field is required</span>}
                    </Box>
                    <Box m='auto' alignContent='center' alignItems='center'>
                        <LoadingButton loading={loginLoading} type='submit' variant="outlined">
                            Submit
                        </LoadingButton>
                    </Box>
                    {loginErrors && <Alert color='error'>{loginErrors.message}</Alert>}
                </form>
            </Grid>
        </BackgroundGrid >
    )
}

export { LoginPage }