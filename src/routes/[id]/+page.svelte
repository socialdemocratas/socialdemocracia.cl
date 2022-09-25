<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<a href="/" class="absolute top-3 right-3 text-white text-2xl font-prompt">SD</a>

<a href="/"><img src={'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13916.png'} 
    class="w-14 -h-12 -fixed absolute top-[-55px] left-[-10px] z-0"
    alt="Copihues decorativos" /></a>

<article class="flex flex-col items-center container m-auto">

    <div class="w-full h-60 bg-cover bg-center" 
    style="background-image: url({data.pic});">
    </div>
    
    <div class="flex-1">
        <h1 class="text-3xl font-bold font-serif text-center leading-normal">{data.title}</h1>
        <!--<p class="text-sm leading-snug">{article.lead}</p>-->
    </div>

    

    <div class="container p-6 m-auto text-lg leading-normal article-body">
        <p class="big-first">
            {data.title} Si social democracia se define simplemente como «controlar, morigerar y regular al capitalismo, entonces, dice el autor, casi todo cabe debajo de este paragua”. En este artículo se revisan las raíces de esta corriente que van más allá del mero reformismo y que ha tenido propósitos claros. La socialdemocracia inglesa, por ejemplo, se articuló en torno a la creación de un sistema de salud público. ¿Cuál es el propósito de la socialdemocracia chilena? No está claro porque a la socialdemocracia le costó echar raíces en Chile. Pero un elemento característico es que tiene como prioridad el fortalecimiento de los sindicatos: no solo para mejorar las condiciones laborales sino para “otorgar una voz que pueda sentarse a la mesa de igual a igual con los demás poderes en la sociedad”, dice el autor.
        </p>
        <p>
            Hace algunas semanas, el senador Felipe Harboe se imaginaba una eventual amplia coalición que podría conformarse en la oposición y que incluyera liberales, progresistas y socialistas. Incluso mencionó insignes figuras del mundo social cristiano y el autonomismo de izquierda como eventuales integrantes de esta coalición (Gabriel Boric y Soledad Alvear). Además, el senador especificaba que el punto de encuentro de toda es amplia diversidad era el “paragua socialdemócrata”.
        </p>
    </div>
</article>

<style>
    .big-first::first-letter {
        margin-top: -22px;
    font-size: 6.8em;
    font-family: var(--sans-serif);
    font-weight: 800;
    line-height: 1em;
    display: inline-block;
    float: left;
    margin: -8px 20px 5px -10px;
    margin-top: -8px;
    min-width: 0.4em;
    font-style: normal;
}
.article-body p {
    margin-bottom: 25px;
}
</style>