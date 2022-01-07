const {
    SlashCommandBuilder
} = require('@discordjs/builders');

const axios = require('axios').default;















module.exports = {
    data: new SlashCommandBuilder()
        .setName('yomama')
        .setDescription('Replies with a yomama joke'),
        
    async execute(interaction) {
    

        const joke = await axios.get("https://api.yomomma.info/")
            .then(function (response) {
                return response.data.joke
            })

            .catch(function (error) {

                console.log(error);



            });




        await interaction.reply(joke);
    },
};