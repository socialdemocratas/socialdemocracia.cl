import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const rand = () => '?nocache=' + Math.random();
    
    const data = {
        articles: [{
            title: 'TPP-11. Pero si Nueva Zelanda lo hizo, ¿por qué yo no?',
            id: 'tpp11-por-que-yo-no',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'que-es-la-izquierda-y-derecha-politica',
            title: '¿Qué es la izquierda y derecha política?',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'jsd',
            title: 'Celulas socialdemócratas chilenas: El caso de JSD',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'psd',
            title: 'Celulas socialdemócratas chilenas: El caso de PSD',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'sdcl',
            title: 'Celulas socialdemócratas chilenas: El caso de Socialdemócratas de Chile (SDCL)',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'democracia-social',
            title: 'Celulas socialdemócratas chilenas: El caso de Democracia Social',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'creando-un-simbolo-para-la-socialdemocracia-chilena',
            title: 'Creando un símbolo para la socialdemocracia chilena',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'fsd',
            title: 'Celulas socialdemócratas chilenas: FSD',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'fsd2',
            title: 'Celulas socialdemócratas chilenas: FSD2',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }, {
            id: 'mas-keynes',
            title: 'Más Keynes, menos Mises. Fuera Marx',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/500' + rand()
        }]
    }

    const selected = data.articles.filter(({ id }) => id === params.id);

    return selected[0];
}