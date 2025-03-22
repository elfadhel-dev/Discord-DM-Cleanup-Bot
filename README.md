# Discord Bot: DM Message Cleanup

This Discord bot performs the following actions:

* Deletes all of its own messages from direct messages (DMs) with users (Only members).
* Includes a function to delete a specific message from a DM.

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

## Intents Explained

* **GatewayIntentBits.DirectMessages**: This is needed for the bot to read and delete messages in DMs.
* **GatewayIntentBits.Guilds**: This is needed so the bot can access the guilds it is in, and therefore access the members of those guilds.
* **GatewayIntentBits.GuildMembers**: This is needed so that the bot can fetch the users in the guilds, and therefore access their DMs.
* **GatewayIntentBits.MessageContent**: This is needed so that the bot can read the content of the messages and therefore delete them.

These intents are the bare minimum needed for the bot to perform the DM cleanup and specific message deletion functions.
