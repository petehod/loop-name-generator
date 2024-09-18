const API_KEY = `sk--ZOFyrOwQX_riNGiWmoBzSNDkyuGpG0ezaOJHqXIllT3BlbkFJwD-Gpz-26q27MOUh__wey61jZ4Z9jcwnSEGNcYbKIA`;

const prompt = `You are a helpful assistant helping a music producer come up with names for their music loops. 
You will be given a word or words that represents the theme the music producer is going for. 
Your job is to come up with 10 ideas for related, interesting words that would work well as the name of a piece of music. These should
be single words that are memorable and easy to spell. In your response, simply include the 10 words separated by commas. Include nothing else.
"`;

export const generateLoopNames = async (word: string): Promise<string> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: word }
        ]
      })
    });

    if (!response.ok) {
      throw new Error("Error generating response from OpenAI.");
    }

    const data = await response.json();
    const words = data.choices[0].message.content;

    return words;
  } catch (error) {
    console.error("Error:", error);
    return "An error occurred while generating the response.";
  }
};
