import { Badge, Card, CardHeader, Grid, Typography } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useUser } from "../Auth/UserContext";
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { TextInputs } from "../../components/TextInputs";
import { useState } from "react";
import BasicForm, { TEXT_INPUT_TYPE } from "../../components/BasicForm";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const PersonalInfo = (props) => {

    const { user } = useUser();
    const [userName, setUserName] = useState(user.name); 

    const handleChangeUser = (event) => {
        setUserName(event.target.value);
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

    return (
        <Box flexDirection='column'>
            <Typography variant='h5'>{'Personal info'}</Typography>
            <Box flexDirection='row' sx={{ marginTop: 2 }}>
                <Badge
                    overlap="circular" badgeContent={
                        <CameraAltIcon />
                    }>
                    <Avatar alt={user.name} src={user.avatar} sizes='large' sx={{ width: 48, height: 48 }} />
                </Badge>
                <Box sx={{ marginLeft: 4, display: 'inline-flex' }} flexDirection='column'>
                    <Typography variant='subtitle'>{userName}</Typography>
                    <Typography variant='caption'>{user.email}</Typography>
                </Box>
            </Box>
            <Grid container>
                <Grid item>
                    <BasicForm 
                    <TextInputs label='Full name' value={userName} onChange={handleChangeUser}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PersonalInfo