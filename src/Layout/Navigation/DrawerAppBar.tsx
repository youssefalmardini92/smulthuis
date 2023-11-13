import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import ThemeSwitch from "../Featured/ThemeSwitcher";
import darkLogo from '../../../src/assets/logo/smulthuis-high-resolution-logo-color-on-transparent-background.png';
import primaryLogo from '../../../src/assets/logo/smulthuis-high-resolution-logo-black-on-transparent-background.png';
import {useLocalStorage} from "usehooks-ts";
import NavItem from "./NavItem";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    {
        name: 'home',
        route: '/',
    },
    {
        name: 'menu',
        route: '/menu',
    },
    {
        name: 'about',
        route: '/about',
    },
    {
        name: 'contact',
        route: '/contact',
    }
];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [isDarkTheme] = useLocalStorage('darkTheme', false);

    const logo = isDarkTheme ? darkLogo : primaryLogo;

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo} alt={'smulthuis logo'} width={75} style={{ margin: 5 }} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <NavItem name={item.name} route={item.route} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', position: 'absolute' }}>
            <CssBaseline />
            <AppBar component="nav" color={"transparent"} sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src={logo} width={75} style={{ margin: 5 }} />
                    </Typography>
                    <ThemeSwitch />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                           <NavItem key={item.name} name={item.name} route={item.route} />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}
