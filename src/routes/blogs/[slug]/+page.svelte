<script lang="ts">
    let { data } = $props();
</script>

<section class="section is-medium">
    <div class="box">
        <p class="title is-2 is-spaced">{data.blog.title}</p>
        <p class="subtitle is-5">By {data.blog.author}</p>
        <span class="tag my-1 is-primary">{data.blog.tags}</span>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iste,
            tenetur id aspernatur quisquam enim ad ratione, consectetur, fugiat
            veritatis fugit repellat quis expedita laborum voluptas adipisci
            amet possimus laboriosam. Autem itaque eligendi accusamus eveniet
            fugit cupiditate nulla iste voluptatibus ipsum, aliquam sequi ab
            libero veniam alias repellat molestias dolore voluptate aspernatur.
            Corporis, suscipit! Eos officiis ullam consequatur assumenda
            inventore.
        </p>
    </div>
    <a href="/blogs" class="button is-medium">Visit all blogs</a>
</section>
