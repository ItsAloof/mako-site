import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react"
import GuildItem from "../components/guilds";
import Layout from "../components/layout";


var requested = false

function hasPermission(permission, owner)
{
    if(owner)
    {
        return true;
    }
    console.log(permission)
    var perms = BigInt(permission)
    var perm = BigInt("0x20")
    if((perms & perm) == perm)
    {
        return true;
    }
}

export default function GuildList() {
    const [guilds, setGuilds] = useState();

    useEffect(() => {
        const fetchData = async () => {
            requested = true
            var res = await fetch("/api/guilds");
            var data = await res.json();
            setGuilds(data);
        }
        console.log("Sending fetch request...")
        if(!requested)
        {
            fetchData();
        }

    }, [])
    console.log(JSON.stringify(guilds))

    return guilds ? (
        <Layout>
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
            {/* <GuildList guilds={guilds} /> */}
        </Layout>
    ) : <Layout><p>Loading...</p></Layout>
}