<script>
</script>

<a href="/movies" class="mb-4 d-inline-block text-decoration-none">Back</a>

<h1>Add a Movie</h1>

<!-- method="POST" sendet die Daten an die Server-Action "?/create" -->
<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="title" class="form-label">Name</label>
        <input type="text" id="title" name="title" class="form-control" required />
    </div>
    
    <div class="mb-3">
        <label for="year" class="form-label">Year</label>
        <input type="number" id="year" name="year" class="form-control" required />
    </div>
    
    <div class="mb-3">
        <label for="length" class="form-label">Length</label>
        <input type="text" id="length" name="length" class="form-control" required />
    </div>
    
    <button type="submit" class="btn btn-primary">Add Movie</button>
</form>