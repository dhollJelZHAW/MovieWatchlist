<script>
    let {data}= $props()
</script>
<a href="/movies" class="mb-4 d-inline-block text-decoration-none">Back</a>

<h1>{data.movie.title}</h1>

<div class="row mt-4">
    <div class="col-md-4">
        <img 
            src={data.movie.poster} 
            alt="Poster für {data.movie.title}" 
            class="img-fluid rounded" 
        />
    </div>

    <div class="col-md-8">
        <p>Jahr: {data.movie.year}</p>
        <p>Dauer: {data.movie.length}</p>
        
        <p>Cast:</p>
        <ul>
            {#if data.movie.actors}
                {#each data.movie.actors as actor}
                    <li>{actor}</li>
                {/each}
            {/if}
        </ul>
    </div>
</div>
