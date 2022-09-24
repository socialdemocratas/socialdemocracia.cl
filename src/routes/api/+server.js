import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET({ request, platform }) {
  //console.log('args', args, Object.keys(args), args.platform.env);
  const result = await platform.env.ARTICLES.list({"prefix": 't'});
  //return new Response("holi")
  return new Response(JSON.stringify(result));
}