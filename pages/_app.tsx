import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { createTheme, ThemeProvider } from '@mui/material'
import { getGuilds } from '../utils/discordapi';
import { getToken } from 'next-auth/jwt';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  darkTheme.spacing(5);

  return (
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
  )
}
export default MyApp

function getGuildData(token: any) {
  var guilds = getGuilds(token);
  return guilds;
}
