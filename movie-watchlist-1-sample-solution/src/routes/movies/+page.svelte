<script>
  import MovieCard from "#lib/components/MovieCard.svelte";
  let {data} =$props();
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<a href="/movies/create"><button>Add New Movie</button></a>

<div class="row">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard movie={movie}></MovieCard>
    </div>
  {/each}
</div>
