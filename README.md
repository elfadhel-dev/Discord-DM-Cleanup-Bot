# Discord Bot: DM Message Cleanup
This Discord bot script performs the following actions:

* Deletes all of its own messages from direct messages (DMs) with users.
* Includes a function to delete a specific message from a DM.

**Important:** The bot can only access and delete messages in DMs with users who are in the same Discord servers as the bot.

## Prerequisites

* Node.js and npm installed.
* A Discord bot token.
* A Discord server to test the bot in.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  Install the dependencies:

    ```bash
    npm install discord.js chalk dotenv
    ```

3.  Create a `.env` file in the root directory and add your bot token:

    ```
    TOKEN=your_bot_token_here
    ```

4.  Run the bot:

    ```bash
    node index.js
    ```

## Setup in Discord Developer Portal

To make this bot work, you need to enable some things in the Discord Developer Portal:

1.  Go to [discord.com/developers/applications](https://discord.com/developers/applications).
2.  Select your bot.
3.  Go to the "Bot" tab.
4.  Enable these "Privileged Gateway Intents":
    * **MESSAGE CONTENT INTENT**
    * **SERVER MEMBERS INTENT**
5.  Save your changes.

## Intents Explained

* **GatewayIntentBits.DirectMessages**: This is needed for the bot to read and delete messages in DMs.
* **GatewayIntentBits.Guilds**: This is needed so the bot can access the guilds it is in, and therefore access the members of those guilds.
* **GatewayIntentBits.GuildMembers**: This is needed so that the bot can fetch the users in the guilds, and therefore access their DMs.
* **GatewayIntentBits.MessageContent**: This is needed so that the bot can read the content of the messages and therefore delete them.

These intents are the bare minimum needed for the bot to perform the DM cleanup and specific message deletion functions.

## Usage

* The bot will automatically delete its messages from DMs when it starts.
* You can use the `deleteSpecificDM` function to delete a single message if you know the user ID and message ID.

### Finding the User ID and Message ID:

* **User ID:** This is a unique number that identifies each Discord user. You can get this by enabling "Developer Mode" in your Discord settings (User Settings -> Advanced) and then right-clicking on a user and selecting "Copy ID."
* **Message ID:** This is a unique number that identifies each message. You can get this by right-clicking on a message (again, with Developer Mode enabled) and selecting "Copy ID."

### Using the Function:

* The `deleteSpecificDM` function takes two things: the User ID and the Message ID.
* You would use this function within your code, or if you were to create a command for your bot, you would use this function within that command.
* For example in a command, you would take the User ID and Message ID from the command arguments, and then pass them into the `deleteSpecificDM` function.

### Example:

```javascript
// Example: deleting a message in a DM
const userId = '123456789012345678'; // Replace with the actual User ID
const messageId = '987654321098765432'; // Replace with the actual Message ID

deleteSpecificDM(userId, messageId);
```

## Contributing

If you'd like to help make this bot better, feel free to contribute!
