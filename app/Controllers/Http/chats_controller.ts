
import { HttpContext } from '@adonisjs/core/http'
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';
import env from '#start/env'
// import {Env} from '@adonisjs/core/env'

export default class ChatController {
  public async chatWithAI({ request, response }: HttpContext) {
    const userInput = request.input('message'); // Get user input from request

    // Initialize LangChain's ChatOpenAI with API key and model
    const model = new ChatOpenAI({
      apiKey:env.get('OPENAI_API_KEY'),
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

