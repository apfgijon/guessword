import type { APIRoute } from 'astro';
import { getEmbeddings } from '../../lib/embeddingService';

export const POST: APIRoute = async ({ request }) => {
    try {
      const { word } = await request.json();
      if (!word) {
        return new Response(JSON.stringify({ error: 'Word is required' }), { status: 400 });
      }
  
      const embedding = await getEmbeddings(word);
      return new Response(JSON.stringify({ embedding }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
    }
  };