import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { GuildInfo } from "../utils/DataTypes";
import { getGuildIcon } from "../utils/discordapi";

interface GuildProp {
    guild: GuildInfo
}

function inDiscord(guild: GuildInfo) {
    return guild.id !== "0";
}


export default function GuildItem({ guild }: GuildProp) {
    // console.log(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`)
    return (
        <Grid item key={guild.id} xs={20}>
            <Card raised sx={{ minWidth: "15em", maxWidth: "15em" }}>
                <CardMedia
                    component="img"
                    image={guild.icon != null ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}` : 'https://sparkcdnwus2.azureedge.net/sparkimageassets/XPDC2RH70K22MN-08afd558-a61c-4a63-9171-d3f199738e9f'}
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
                    {
                        
                        <Button>
                            Setup Bot
                        </Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
}