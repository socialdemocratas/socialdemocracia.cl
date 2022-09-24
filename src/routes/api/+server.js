import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function GET({ platform }) {
  //console.log('args', args, Object.keys(args), args.platform.env);
  const result = platform.env.ARTICLES.list({"prefix": 't'});
  //return new Response("holi")
  return result;
}