import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET({ request, platform }) {
    const result = platform.env.ARTICLES.list({"prefix": 't'});
 
  return new Response(JSON.stringify(result));
}