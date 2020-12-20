<template>
    <div id="app">
        <header class="header">
            <span class="nombre-app">GestionApp</span>
            <div class="user-avatar"></div>
        </header>
        <main class="main">
            <router-view></router-view>
        </main>
        <nav class="nav-seccion">
            <ul class="list-group">
                <span class="list-title">Usuario</span>
                <li class="list-item"><a href="#/usuario/Crear">Crear</a></li>
                <li class="list-item"><a href="#/">Ver</a></li>
            </ul>
            <ul class="list-group">
                <span class="list-title">Cliente</span>
                <li class="list-item"><a href="#/usuario/Crear">Crear</a></li>
                <li class="list-item"><a href="#/">Listar</a></li>
            </ul>
        </nav>

        <!-- <div class="grid-container">
        <header class="header">GestionApp</header>
        <aside class="aside">
          <ul class="aside_list">
            <li class="aside_list-item">Usuarios</li>
          </ul>
        </aside>
      <main class="main"><router-view /></main>
      <footer class="footer">
        <div class="footer_copyright">G1M1 - 09 &copy;2020</div>
        <div class="footer_byline">Mision Tic 2022</div>
      </footer>
    </div> -->
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
