import React, { useState } from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import IconButton from '@mui/material/IconButton';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { dashboardStyles } from './styles';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState(users);

    const getHeader = () => {
        const handleSearch = (value) => {
            filterData(value);
        };

        const filterData = (value) => {
            const lowercasedValue = value.toLowerCase().trim();
            if (lowercasedValue === '') setUsers(searchResults);
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) => 
                    item[key].toString().toLowerCase().includes(lowercasedValue)
                    );
                });
                setUsers(filteredData)
            };
        };

        const addUser = () => {
            setOpen(true);
        };

        return (
            <Box sx={dashboardStyles.wrapper}>
                <SearchBar 
                    placeholder="Search by name, description"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='250px'
                    
                />
                <Box sx={dashboardStyles.icons}>
                    <CommonButton 
                        variant="contained"
                        onClick={addUser}
                        size="small"
                        sx={dashboardStyles.addUserButton}
                    >
                    <Typography 
                    >
                       <AddIcon/> Add admin
                    </Typography>
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const addNewUser = (data) => {
        users.push({ ...data });
        setOpen(false);
    };

    const getContent = () => (
        <>
            {
                users.length ? 
                    users.map((user) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>User ID: {user.userId}</Typography>
                            <Typography>Email: {user.email}</Typography>
                            <Typography>Phone Number: {user.phoneNumber}</Typography>
                        </Box>
                    )) :
                    <Typography 
                    >
                    </Typography>
            }
        </>
    );

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser}/>
        </GridWrapper>
    )
}

export default Dashboard;
