import { Alert, Button, Card, Grid, Paper, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useLogin } from "./AuthAPI"
import { BackgroundGrid } from "../../components/BackgroundGrid"
import { TextInputs } from "../../components/TextInputs"
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Navigate, useNavigate } from "react-router"
import BasicForm, { TEXT_INPUT_TYPE } from "../../components/BasicForm"

const LoginPage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [setLogin, { error: loginErrors, loading: loginLoading }] = useLogin('/')
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setLogin({ variables: data })
    }

    const handleRegister = () => {
        navigate('/register')
    }

    const inputs = [
        {
            type: TEXT_INPUT_TYPE,
            name: 'username',
            label: 'Username',
            required: true,
        },
        {
            type: TEXT_INPUT_TYPE,
            name: 'password',
            label: 'Password',
            required: true,
            adds: { type: 'password' },
        }
    ];

    const actions = [
        {
            item: <LoadingButton loading={false} type='submit' variant="outlined" color='primary'>
                {'Login'}
            </LoadingButton>
        },
        {
            item: <Button onClick={handleRegister} color='secondary'>
                {'Register'}
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
                <BasicForm inputs={inputs} actions={actions} inputErrors={loginErrors} onSubmit={onSubmit} />
            </Grid>
        </BackgroundGrid >
    )
}

export { LoginPage }