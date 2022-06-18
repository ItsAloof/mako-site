import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    providers: [
      DiscordProvider({
        authorization: "https://discord.com/api/oauth2/authorize?client_id=927373914508775525&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email%20guilds%20bot%20applications.commands",
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
      }),
    ],
    theme: {
      colorScheme: "dark",
    },
    callbacks: {
      async jwt({ token, account, user }) {
        if(account && user)
        {
          token.accessToken = account.access_token
          token.refreshToken = account.refresh_token
          token.expiresAt = account.expires_at
        }
        return token
      },
    },
  })
