import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { GuildInfo } from "../utils/DataTypes";
import { getGuildIcon } from "../utils/discordapi";

interface GuildProp {
    guild: GuildInfo
}


export default function GuildItem({ guild }: GuildProp) {
    // console.log(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`)
    return (
        <Grid item key={guild.id} xs={20}>
            <Card raised sx={{ minWidth: "15em", maxWidth: "15em" }}>
                <CardMedia
                    component="img"
                    image={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`}
                    alt="Guild Icon"
                    height="200px"
                    width="100px"
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {guild.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        Setup Bot
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}