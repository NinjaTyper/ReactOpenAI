const { OpenAI } = require('openai');

const configuration = {
    apiKey: '',
};

const openAi = new OpenAI(configuration);

export const getResponse = async (content) => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content },
        ],
        max_tokens: 100,
        temperature: 0.5,
    });
    return response.choices[0].message.content;
};
