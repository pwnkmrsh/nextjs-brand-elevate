import { getMostRecentUserMessage } from '@/lib/utils';

export const maxDuration = 50;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const userMessage = getMostRecentUserMessage(messages);

    if (!userMessage) {
      return new Response('No user message found', {
        status: 404,
      });
    }

    
  } catch (error) {
    console.log(error);
  }
}
