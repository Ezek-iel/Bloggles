<script lang="ts">
    import type { ActionData } from "./$types";

    let { data, form} = $props();
</script>

<section class="section is-medium">
    
    <ul>
            {#each data.blogs as blog (blog.id)}
                <li class="my-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="title is-3">{blog.title}</p>
                                <p class="subtitle is-5">{blog.author}</p>
                                <a href="/blogs/{blog.id}" class="button"
                                    >View Blog</a
                                >
                                <div class="mt-4">
                                    <span class="is-small"
                                        >{blog.views} views</span
                                    >
                                    <span class="is-small">
                                        {blog.comments} comments</span
                                    >
                                </div>
                                <div class="tags mt-3">
                                    <span class="tag is-primary"
                                        >{blog.tags}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            {/each}
    </ul>
</section>
