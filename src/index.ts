import * as Discord from 'discord.js'
import ThrowEnv from 'throw-env'
import {Ready} from './client/ready'
import {GuildMemberAdd} from './client/guildMemberAdd'
import {GuildMemberUpdate} from './client/guildMemberUpdate'
import {Message} from './client/message'
import {MessageReactionAdd} from './client/messageReactionAdd'
import {CronOperation} from './util/cron'

export const Client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']})

// botの起動時に実行
Client.on('ready', () => Ready())

// 新しいメンバーが増えた際に実行
Client.on('guildMemberAdd', member => GuildMemberAdd(member))

// メンバーの状態が変わった際に実行
Client.on('guildMemberUpdate', (_, member) => GuildMemberUpdate(member))

// メッセージが送信された際に実行
Client.on('message', msg => Message(msg))

// リアクションが付与された際に実行
Client.on('messageReactionAdd', (react, user) => MessageReactionAdd(react, user))

// クーロンの内容
CronOperation()

Client.login(ThrowEnv('CAL_TOKEN'))
