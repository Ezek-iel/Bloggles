<script lang="ts">
    import type { ActionData } from "./$types";

  let {form} : {form: ActionData} = $props()
</script>

<section class="section is-medium">
    <div class="columns is-centered">
        <div class="column is-5">
            <div class="box">
                <form method="post">
                    {#if form?.titleMissing}
                        <div class="notification is-danger">No title bruh</div>
                    {/if}
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" name="title" />
                            <p class="help is-small">Blog title</p>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <textarea class="input" name="content"></textarea>
                            <p class="help is-small">Blog content</p>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" name="tags" />
                            <p class="help is-small">Blog tag</p>
                        </div>
                    </div>
                    <input type="submit" value="Submit" class="button" />
                </form>
            </div>
        </div>
    </div>
</section>
