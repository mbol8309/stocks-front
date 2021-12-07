import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import PersonalInfo from '../../features/Profile/PersonalInfo';
import SecurityInfo from '../../features/Profile/SecurityInfo';
import SocialInfo from '../../features/Profile/SocialInfo';

const profile_options = [
    {
        title: 'Personal',
        icon: <PersonOutlineIcon/>,
        content: PersonalInfo
    }, {
        title: 'Security',
        icon: <VpnKeyIcon/>,
        content: SecurityInfo
    }, {
        title: 'Social',
        icon: <SocialDistanceIcon/>,
        content: SocialInfo
    },
]

export { profile_options }