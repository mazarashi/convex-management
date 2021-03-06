import Settings from 'const-settings'
import {Client} from '../index'
import * as util from '../util'

/**
 * キャルが起動した際に通知を送る
 */
export const Ready = () => {
  const channel = util.GetTextChannel(Settings.CHANNEL_ID.BOT_NOTIFY)
  channel.send('きゃるきゃるーん')

  console.log(`Logged in as ${Client.user?.username}!`)
}
