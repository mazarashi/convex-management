import * as Discord from 'discord.js'
import ThrowEnv from 'throw-env'
import {Ready} from './client/ready'
import {GuildMemberAdd} from './client/guildMemberAdd'
import {GuildMemberUpdate} from './client/guildMemberUpdate'
import {Message} from './client/message'
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

Client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.message.channel.id === '') return
  console.log(user)
})

// クーロンの内容
CronOperation()

Client.login(ThrowEnv('CAL_TOKEN'))
