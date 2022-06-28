import { Grid } from "@mui/material"




export default function GuildList({ guilds }) {
    console.log(guilds)
    return (
        <Grid container>
            {guilds.map((guild) => {
                <Grid item>
                    <GuildItem guildInfo={guild} />
                </Grid>
            })}
        </Grid>
    )
}