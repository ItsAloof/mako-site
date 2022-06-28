export interface GuildData {
    guilds: [GuildInfo];
}

export type GuildInfo = {
    id: string,
    name: string,
    icon: string,
    permissions: string,
    owner: boolean
}