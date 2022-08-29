import { AppBar, Avatar, Box, Button, createTheme, IconButton, Menu, MenuItem, Paper, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { StayPrimaryLandscape } from "@mui/icons-material";
import React from "react";
import { useRouter } from "next/router";



export default function Header() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#f44336',
                contrastText: '#ffffff',
            },
            action: {
                hover: "rgba(0, 0, 0, 0.04)",
            }
        }
    });
    const settings = ['Guilds', 'Dashboard', 'Logout'];

    const { data: session, status } = useSession();
    const loading = status === "loading";
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    var route = useRouter();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        var path = event.currentTarget.getAttribute("data-index")
        if(path)
        {
            path = path.toLowerCase();
            route.push(`/${path}`)
        }
        setAnchorElUser(null);
    };

    const handleMakoBtn = () =>
    {
        route.push("/");
    }

    return (
        <header>
            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            <Paper square color="inherit" sx={{ flexGrow: 0, background: { bgcolor: 'primary.dark' } }} elevation={20}>
                <Box sx={{ opacity: "100%", bgcolor: "transparent" }}>
                    <AppBar position="static" sx={{ paddingRight: "10%", paddingLeft: "10%", backgroundColor: 'transparent' }}>
                        <Toolbar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Button color="inherit" variant="outlined" onClick={handleMakoBtn} >
                                    <Typography variant="h6" color="inherit">
                                        Mako Bot
                                    </Typography>
                                </Button>
                            </Box>
                            <Box sx={{ flexGrow: 0.025 }}>
                                <Button variant="outlined" color="success" href="https://discord.com/api/oauth2/authorize?client_id=927373914508775525&permissions=8&scope=bot">
                                    Add Bot
                                </Button>
                            </Box>
                            <Box sx={{ flexGrow: 0.025 }}>
                                <Button color="inherit" href="/about">
                                    About
                                </Button>
                            </Box>
                            {!session && (
                                <>
                                    <Button color="inherit" onClick={(e) => signIn("discord")}>Login</Button>
                                </>
                            )}
                            {session?.user && (
                                <>
                                    <IconButton color="inherit" onClick={handleOpenUserMenu}>
                                        <Avatar src={session.user.image ? session.user.image : "/static/images/no-image.png"} />

                                    </IconButton>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (setting === "Logout") ? (
                                            <MenuItem divider key={setting} onClick={() => signOut()}>
                                                <Typography sx={{ color: "#c62828" }} textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        )
                                            :
                                            (
                                                <MenuItem divider key={setting} data-index={setting} onClick={handleCloseUserMenu}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            )
                                        )
                                        }</Menu>

                                </>
                            )}
                        </Toolbar>
                    </AppBar>
                </Box>
            </Paper>
        </header>
    );
}