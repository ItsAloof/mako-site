import { AppBar, Paper, Typography } from "@mui/material";


const Footer = () => {
    return (
        <AppBar component="footer" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Paper square elevation={5}>
                <Typography variant="subtitle1">
                    Made with ❤️ by Mako Bot
                </Typography>
            </Paper>
        </AppBar>
    )
}

export default Footer;