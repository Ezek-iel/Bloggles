<script lang="ts">
    import "bulma/css/bulma.min.css";
    let {children} = $props()

    let currentTheme: "light" | "dark" = $state('dark')

   const onclick = (event: Event) => {
        let html = document.querySelector('html') as HTMLHtmlElement
        if (currentTheme === 'dark'){
            html.classList.add('theme-light')
            currentTheme = 'light'
        } else {
            html.classList.remove('theme-light')
            currentTheme = 'dark'
        }
    }
</script>

<nav class="navbar"aria-label="main navigation" id="nav">
    <div class="navbar-brand">
        <p class="navbar-item subtitle is-3">Bloggles</p>
        <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item" href="/"> Home </a>

           
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="/"> More </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" href="/about"> About </a>
                </div>
            </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary" href="/">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-info is-light" href="/create">
                        <strong>Create Blog</strong>
                    </a>
                    <a class="button is-light" href="/"> Log in </a>
                    <button class="button" {onclick}>Change Theme</button>
                </div>
            </div>
        </div>
    </div>
</nav>

{@render children()}


<style>
    :global(#nav){
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: var(--bulma-shadow);
    }
</style>