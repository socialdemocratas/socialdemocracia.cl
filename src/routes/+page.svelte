<script>
    import SDSpeciment233Image from '$lib/assets/specimen233.png';

    let articulos = [0,1,2,3,4,5,6];

    export let data;
    console.log(data)
</script>
{data}{JSON.stringify(data)}
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

<div class="h-24 flex items-center w-full relative">
    <img src={SDSpeciment233Image} 
    class="w-20 h-20 absolute left-[-20px] top-[-10px]"
    alt="Logo, una mano sosteniendo un copihue rojo" />
    <div class="flex flex-col flex-1 text-center">
        <h1 class="text-3xl font-medium font-vibur">Socialdemocracia</h1>
        <small>Revista política chilena</small>
    </div>
</div>

<div class="container p-3 m-auto">
    {#each articulos as article}
    <article class="pb-10 mb-10 border-b border-b-black border-b-2">
        <h1 class="text-3xl font-medium font-serif leading-normal">TPP-11. Razones para decidir</h1>
        <p class="text-base leading-snug">Hace algunas semanas, el senador Felipe Harboe se imaginaba una eventual amplia coalición que podría conformarse en la oposición y que incluyera liberales, progresistas y socialistas. Incluso mencionó insignes figuras del mundo social cristiano y el autonomismo de izquierda como eventuales integrantes de esta coalición (Gabriel Boric y Soledad Alvear). Además, el senador especificaba que el punto de encuentro de toda es amplia diversidad era el “paragua socialdemócrata”.</p>
    </article>
    {/each}

</div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
