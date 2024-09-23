// import type { HttpContext } from '@adonisjs/core/http'

// export default class ChatsController {
// }

// Import necessary packages and modules
// const { ChatOpenAI } = require('@langchain/openai');
// const { HumanMessage } = require('@langchain/core/messages');

// const Env = use('Env'); // To access environment variables

// class ChatController {
//   async chatWithAI({ request, response }) {
//     const userInput = request.input('message'); // Get user input from request

//     // Initialize LangChain's ChatOpenAI with API key and model
//     const model = new ChatOpenAI({
//       
//       model: 'gpt-4', // Define the model you want to use
//       temperature: 0
//     });

//     try {
//       // Use LangChain's model to generate a response from OpenAI
//       const aiResponse = await model.invoke([new HumanMessage({ content: userInput })]);

//       // Return the AI's response
//       return response.json({ reply: aiResponse.text });
//     } catch (error) {
//       console.error('Error communicating with OpenAI:', error);
//       return response.status(500).json({ error: 'Failed to communicate with OpenAI' });
//     }
//   }
// }

// module.exports = ChatController;




import { HttpContext } from '@adonisjs/core/http'
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';
// import {Env} from '@adonisjs/core/env'

export default class ChatController {
  public async chatWithAI({ request, response }: HttpContext) {
    const userInput = request.input('message'); // Get user input from request

    // Initialize LangChain's ChatOpenAI with API key and model
    const model = new ChatOpenAI({
      
      model: 'gpt-4o-mini', // Define the model you want to use
      temperature: 0,
    });

    try {
      
      const aiResponse = await model.invoke([new HumanMessage({ content: userInput })]);
      return response.json({ reply: aiResponse.text });
      // return "it works!";

    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      return response.status(500).json({ error: 'Failed to communicate with OpenAI' });
    }
  }
}

