import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const rand = () => '?nocache=' + Math.random();
    
    return {
        articles: [{
            title: 'TPP-11. Pero si Nueva Zelanda lo hizo, ¿por qué yo no?',
            section: 'Opina informado',
            author: 'Rodrigo González',
            id: 'tpp11-por-que-yo-no',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'que-es-la-izquierda-y-derecha-politica',
            title: '¿Qué es la izquierda y derecha política?',
            section: 'Conocimientos escenciales',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'jsd',
            title: 'Celulas socialdemócratas chilenas: El caso de JSD',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'psd',
            title: 'Celulas socialdemócratas chilenas: El caso de PSD',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'sdcl',
            title: 'Celulas socialdemócratas chilenas: El caso de Socialdemócratas de Chile (SDCL)',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'democracia-social',
            title: 'Celulas socialdemócratas chilenas: El caso de Democracia Social',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'creando-un-simbolo-para-la-socialdemocracia-chilena',
            title: 'Creando un símbolo para la socialdemocracia chilena',
            section: 'Reportajes',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'fsd',
            title: 'Celulas socialdemócratas chilenas: FSD',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'fsd2',
            title: 'Celulas socialdemócratas chilenas: FSD2',
            section: 'Opina informado',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }, {
            id: 'mas-keynes',
            title: 'Más Keynes, menos Mises. Fuera Marx',
            section: 'Reportajes',
            author: 'Rodrigo González',
            lead: 'Proin feugiat aliquam tortor, id hendrerit urna semper pulvinar. Nullam iaculis aliquam risus, nec tempus quam condimentum ut',
            pic: 'https://picsum.photos/200' + rand()
        }]
    }
}