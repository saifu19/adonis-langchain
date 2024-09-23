/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// import router from '@adonisjs/core/services/router'

// router.on('/').render('pages/main')

// router.post('/api/chat', 'Http/chats_controller.chatWithAI');

import router from '@adonisjs/core/services/router'
// Import the controller dynamically using IoC container method
const ChatsController = () => import('../app/Controllers/Http/chats_controller.ts');

// Route to render the main page
router.on('/').render('pages/main')

// Define POST route for the chat API, using dynamic controller import
router.post('/api/chat', [ChatsController, 'chatWithAI'])





// import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//     return view.render('pages/main')
//   })


// import Route from '@ioc:Adonis/Core/Route'

// // Original route to render the main page
// Route.on('/').render('pages/main')

// // Define route for the chatbot
// Route.post('/chatbot', async ({ request, response }) => {
//   const { ChatOpenAI } = require("@langchain/openai");
//   const { HumanMessage } = require("@langchain/core/messages");

//   // Initialize the ChatOpenAI model
//   const model = new ChatOpenAI({
//     model: "gpt-4o-mini",
//     temperature: 0
//   });

//   // Get the user's message from the request
//   const userMessage = request.input('message');
  
//   try {
//     // Send the user's message to the model and get the response
//     const result = await model.invoke([new HumanMessage({ content: userMessage })]);
    
//     // Return the chatbot's response
//     return response.json({ botResponse: result.content });
//   } catch (error) {
//     // Handle errors
//     return response.status(500).json({ error: 'Failed to fetch chatbot response.' });
//   }
// });

