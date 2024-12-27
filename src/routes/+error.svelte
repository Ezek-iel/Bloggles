<script>
    import {page} from "$app/state"
</script>

<section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="notification is-danger">
            <button class="delete" aria-label="delete"></button>
            <h1 class="title is-1 has-text-centered">
              {page.error?.message}
            </h1>
            <h2 class="title is-3 has-text-centered">
              {page.status}
            </h2>
        </div>
      </div>
    </div>
  </section>