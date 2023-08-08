import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from "@mui/icons-material";
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";

const TopBarComponent = (props: any) => {
    // const {user} = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {isOpen, setIsOpen} = props

    return (
        <AppBar
            className={classes.root}
            position="static"
        >
            <Toolbar
                className={classes.toolbar}
            >
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={()=> setIsOpen(!isOpen)}/>
                    <Typography variant='h3'>Welcome Roman</Typography>
                </FlexBetween>
                <Box className={classes.right}>
                    <Grid className={classes.iconBlock}>
                        <IconButton onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                        </IconButton>
                        <IconButton>
                            <NotificationsNone/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.searchBlock}>
                        <IconButton className={classes.searchIcon}>
                            <Search/>
                        </IconButton>
                        <InputBase className={classes.searchInput} placeholder='Search'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.root}>
        //     <Grid>Welcome Roman</Grid>
        //     <Box className={classes.right}>
        //         <Grid className={classes.iconBlock}>
        //             <IconButton onClick={colorMode.toggleColorMode}>
        //                 {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNoneIcon/>
        //             </IconButton>
        //         </Grid>
        //         <Grid className={classes.searchBlock}>
        //             <IconButton className={classes.searchIcon}>
        //                 <SearchIcon/>
        //             </IconButton>
        //             <InputBase className={classes.searchInput} placeholder='Search'/>
        //         </Grid>
        //     </Box>
        // </Box>
    );
};

export default TopBarComponent;