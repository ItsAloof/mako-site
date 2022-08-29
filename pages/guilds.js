import { Backdrop, Card, CardMedia, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react"
import GuildItem from "../components/guilds";
import Layout from "../components/layout";


var requested = false

function hasPermission(permission, owner) {
    if (owner) {
        return true;
    }
    console.log(permission)
    var perms = BigInt(permission)
    var perm = BigInt("0x20")
    if ((perms & perm) == perm) {
        return true;
    }
}

export default function GuildList() {
    const [guilds, setGuilds] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            requested = true
            var res = await fetch("/api/guilds");
            var data = await res.json();
            setGuilds(data);
            setLoading(false);
        }
        console.log("Sending fetch request...")
        if (!requested) {
            fetchData();
        }

    }, [])
    console.log(JSON.stringify(guilds))

    return guilds ? (
        <Layout>
            <Paper square style={{ backgroundColor: "#262626", paddingTop: "1em" }}>
                <Grid container spacing={10} sx={{ padding: "10em" }}>
                    {guilds.map((guild) =>
                        hasPermission(guild.permissions, guild.owner) ?
                            (
                                <Grid item key={guild.id}>
                                    <GuildItem guild={guild} />
                                </Grid>
                            )
                            :
                            (<></>)
                    )}
                </Grid>
            </Paper>
            {/* <GuildList guilds={guilds} /> */}
        </Layout>
    )
        :
        (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )

}