import { Alert, Button, Card, Grid, Paper, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useLogin, useRegisterUser } from "./AuthAPI"
import { BackgroundGrid } from "../../components/BackgroundGrid"
import { TextInputs } from "../../components/TextInputs"
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Navigate, useNavigate } from "react-router"
import BasicForm, { TEXT_INPUT_TYPE } from "../../components/BasicForm"

const RegisterPage = (props) => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [setRegisterUser, { error: registerError, loading: registerLoading }] = useRegisterUser()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setRegisterUser({ variables: data })
    }
    
    const handleRedirectLogin =()=>{
        navigate('/login')
    }

    const inputs = [
        {
            type: TEXT_INPUT_TYPE,
            name: 'name',
            label: 'Name',
            required: true,
        },
        {
            type: TEXT_INPUT_TYPE,
            name: 'email',
            label: 'Email',
            required: true,
        },
        {
            type: TEXT_INPUT_TYPE,
            name: 'password',
            label: 'Password',
            required: true,
            adds: { type: 'password' },
        },
        {
            type: TEXT_INPUT_TYPE,
            name: 'password_confirmation',
            label: 'Password confirmation',
            required: true,
            adds: { type: 'password' },
        }
    ];


    const actions = [
        {
            item: <LoadingButton loading={registerLoading} type="submit" variant="outlined" color='primary'>
                {'Register'}
            </LoadingButton>
        },
        {
            item: <Button onClick={handleRedirectLogin} color='secondary'>
                {'Login'}
            </Button>
        }
    ]

    return (
        <BackgroundGrid display="flex"
            direction="column"
            justifyContent="center"
            flexDirection='column'
            alignItems="center">
            <Grid item>
                <BasicForm
                    actions={actions}
                    inputs={inputs}
                    inputErrors={registerError}
                    onSubmit={onSubmit} />
            </Grid>
        </BackgroundGrid >
    )
}

export default RegisterPage