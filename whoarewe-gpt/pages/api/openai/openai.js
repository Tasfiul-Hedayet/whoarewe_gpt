// import { OpenAIApi, Configuration } from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

export default async function handler(req, res)  {
  res.status(200).json({ text: "h" })
}

//   try {
//     const { prompt } = req.body;

//     if (prompt !== undefined) {
//       const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `${prompt}`,
//       });

//       const generatedText = completion.data.choices[0].text;

//       res.status(200).json({ text: generatedText });

//     } else {
//       res.status(400).json({ text: "No prompt provided." });
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//     res.status(500).json({ text: "An error occurred while processing the request." });
//   }
// };



