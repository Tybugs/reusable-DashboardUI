
import CottageIcon from '@mui/icons-material/Cottage';
import GroupsIcon from '@mui/icons-material/Groups';
import CorporateFareSharpIcon from '@mui/icons-material/CorporateFareSharp';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <CottageIcon />,
        label: 'Dashboard',
        route: 'dashboard',
    },
    {
        id: 1,
        icon: <GroupsIcon />,
        label: 'Administrator',
        route: 'administrator',
    },
    {
        id: 2,
        icon: <CorporateFareSharpIcon />,
        label: 'Contributors',
        route: 'contributors',
    },
    {
        id: 3,
        icon: <VolunteerActivismIcon />,
        label: 'Beneficiary User',
        route: 'beneficiary-user',
    },
    {
        id: 4,
        icon: <VolunteerActivismIcon />,
        label: 'Volunteer User',
        route: 'volunteer-user',
    },
    {
        id: 5,
        icon: <SummarizeIcon />,
        label: 'Reports',
        route: 'reports',
    },
    {
        id: 6,
        icon: <HelpIcon />,
        label: 'Help',
        route: 'help',
    },
    {
        id: 7,
        icon: <SettingsIcon />,
        label: 'Settings',
        route: 'settings',
    },
]