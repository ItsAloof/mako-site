import { Box, Divider, Paper, Typography } from "@mui/material"


const HomeBody = () => {
    return (
        <Paper square>
            <Box maxWidth={500} padding={5}>
                <Paper square elevation={5} sx={{padding: 1, minHeight: 'auto'}}>
                    <Typography variant="subtitle1">Add a feature rich bot to your server to help out with various tasks along with adding many fun features that utilize Discord latest features including buttons, views and all</Typography>
                </Paper>
            </Box>
            <Paper square>
                <div>

                </div>
            </ Paper>
        </Paper>
    )
}

export default HomeBody