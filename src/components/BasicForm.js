import { LoadingButton } from "@mui/lab";
import { Alert, Button, Card, CardActions, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { TextInputs } from "./TextInputs";

const TEXT_INPUT_TYPE = 'text-input';

const OpsTextInputs = (props) => {
    const { name, label, required, adds, register } = props;

    return (
        <TextInputs
            name={name}
            label={label}
            required={Boolean(required)}
            {...adds}
            {...register(name)}
        />
    )
}

const BasicForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loginErrors = false;
    const { onSubmit, inputs, actions, inputErrors } = props;



    return (
        <Card variant='outlined' elevation={4}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <CardContent>
                    {inputs.map((item, index) => (
                        <Box m='auto'>
                            {item.type == TEXT_INPUT_TYPE &&
                                <OpsTextInputs {...item} register={register}/>
                            }
                        </Box>
                    ))}
                    {inputErrors && <Alert color='error'>{inputErrors.message}</Alert>}

                </CardContent>
                <CardActions>
                    {actions.map((action, index) => (
                        action.item
                    ))}
                </CardActions>
            </form>
        </Card>
    )
}

export {TEXT_INPUT_TYPE}
export default BasicForm;