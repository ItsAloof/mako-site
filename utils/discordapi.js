import axios from "axios";
import { GuildData, GuildInfo } from "./DataTypes";

const uri = "https://discord.com/api/v10"
const iconURI = "https://cdn.discordapp.com/icons"

export async function getGuilds(token) {
    var config = {
        method: 'get',
        url: 'https://discord.com/api/v10/users/@me/guilds',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    var data;
    await axios(config)
    .then(function (response)
    {
        data =  response.data;
    })
    .catch(function (error){
        console.log(error)
    });
    return data;
}


export function getGuildIcon(id, icon) {
    return `${iconURI}/${id}/${icon}.png`
}