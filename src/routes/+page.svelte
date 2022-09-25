<script>
    import SDSpeciment233Image from '$lib/assets/specimen233.png';
    import Logo from '$lib/assets/logo-100px.png';
    import FutureImg from '$lib/assets/future.jpg'

    let articulos = [0,1,2,3,4,5,6];

    /** @type {import('./$types').PageData} */
    export let data = [];
</script>
<div class="fixed bottom-0 lg:relative w-full bg-neutral-100 p-1">
    <div class="container flex m-auto items-center">
            <select class="bg-transparent">
                <optgroup label="Ediciones">
                    <option>Edición Piloto</option>
                </optgroup>
                <optgroup label="Menú">
                    <option>Quienes somos</option>
                    <option>Línea editorial</option>
                </optgroup>
            </select>
            <span class="flex-grow"></span>
    <a href="/" 
    class="bg-green-100 px-3 py-1 rounded-full"
    >Envía tu artículo</a>
    </div>
</div>

<a href="/"><img src={'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13916.png'} 
    class="w-14 -h-12 fixed -absolute top-[-55px] left-[-10px] z-0"
    alt="Copihues decorativos" /></a>

<div class="h-24 flex items-center w-full relative">
    
    <div class="flex flex-col flex-1 text-center">
        <h1 class="text-2xl font-prompt">Socialdemocracia</h1>
        <small>chilena</small>
    </div>
</div>

<div class="">
    {#each data.articles as article}
    <article class="pb-5 mb-5 border-b -border-b-black border-b-1 flex flex-row items-center container pl-6 px-3 m-auto z-10">
        <a href="/{article.id}" class="flex-1">
            <span>{article.section}</span>
            <h1 class="text-2xl font-bold font-serif leading-normal">{article.title}</h1>
            <span class="text-gray-600">{article.author}</span>
            <!--<p class="text-sm leading-snug">{article.lead}</p>-->
        </a>
        <a href="/{article.id}" class="block w-20 h-20 bg-cover bg-center mr-[-15px]" 
        style="background-image: url({article.pic});">
        </a>
    </article>
    {/each}

</div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
