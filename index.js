import { Client, GatewayIntentBits } from 'discord.js';
import chalk from 'chalk';

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', async () => {
    console.log(chalk.green(`✅ Logged in as ${client.user.tag}`));

    // 🔹 Delete bot's messages in all DMs
    console.log(chalk.cyan('\n🚮 Deleting bot messages in DMs...'));
    let users = new Set();

    for (const guild of client.guilds.cache.values()) {
        const members = await guild.members.fetch();
        members.forEach(member => {
            if (!member.user.bot) users.add(member.user);
        });
    }

    for (const user of users) {
        try {
            const dmChannel = await user.createDM();
            let messages;

            do {
                messages = await dmChannel.messages.fetch({ limit: 50 });
                let botMessages = messages.filter(msg => msg.author.id === client.user.id);

                for (const message of botMessages.values()) {
                    console.log(chalk.gray(`🗑️ Deleting message ID: ${message.id} from DM with ${user.tag}`));
                    await message.delete().catch(console.error);
                }

                console.log(chalk.green(`✅ Deleted messages from DM with ${user.tag}`));
            } while (messages.size > 0);
        } catch (error) {
            console.log(chalk.red(`❌ Could not delete DMs for ${user.tag}: ${error.message}`));
        }
    }

    console.log(chalk.green('\n✅ Finished deleting messages from all DMs.'));
});

// 🔹 Function to delete a specific message in DM using message ID
async function deleteSpecificDM(userId, messageId) {
    try {
        const user = await client.users.fetch(userId);
        const dmChannel = await user.createDM();
        const message = await dmChannel.messages.fetch(messageId);

        await message.delete();
        console.log(chalk.green(`✅ Deleted message ${messageId} from DM with ${user.tag}`));
    } catch (error) {
        console.error(chalk.red(`❌ Failed to delete message ${messageId}: ${error.message}`));
    }
}

client.login(process.env.TOKEN);
