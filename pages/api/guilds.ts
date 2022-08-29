// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import { GuildInfo } from '../../utils/DataTypes'
import { getGuilds } from '../../utils/discordapi'

type Data = {
  name: string
}


interface Token {
  accessToken: string, 
  refreshToken: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var token: any = await getToken({ req });
  var { accessToken } = token;
  console.log(token);
  var config = {
      method: 'get',
      url: 'https://discord.com/api/v10/users/@me/guilds',
      headers: {
          'Authorization': `Bearer ${accessToken}`
      }
  };
  var data;
  await axios(config)
  .then(function (response)
  {
      res.json(response.data);
  })
  .catch(function (error){
      console.log(error)
  });
}
