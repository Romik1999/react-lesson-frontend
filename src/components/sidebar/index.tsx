import React from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';
import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
    LogoutOutlined
} from '@mui/icons-material';

const SidebarComponent = (props: any) => {
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    return (
        <div>
            <h1>This is sidebar</h1>
        </div>
    );
};

export default SidebarComponent;