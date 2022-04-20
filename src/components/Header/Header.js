import React from 'react'
import NotificationBell from '../common/NotificationBell/NotificationBell'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Box from '@mui/material/Box';
import { headerStyles } from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = ({ title }) => {

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
            
                <NotificationBell
                    iconColor="white"
                />
                <Avatar src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" />
                <Typography 
                sx={headerStyles.topRowText}
            >
                Juan Dela Cruz
            <ArrowDropDownIcon />

            </Typography>
            </Box>
            <Typography 
                sx={headerStyles.topRowButtom}
            >
                Administrator
            </Typography>
      </Box>
    )
}

export default Header
