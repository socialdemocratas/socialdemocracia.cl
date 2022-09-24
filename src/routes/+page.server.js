import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }, platform) {
    const result = await platform.env.ARTICLES.list({"prefix": 't'});
    return result;
}