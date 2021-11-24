<template>

  <body class="Terrapin">
  <header class="Terrapin-header">
    <div>
      <!-- Header Left -->
      <span class="header-left">Left</span>

      <!-- Header Center -->
      <span class="header-center">Center</span>

      <!-- Header Right -->
      <span class="header-right">Right</span>
    </div>
  </header>
  <div class="Terrapin-app">
    <main class="Terrapin-content">
        <router-view></router-view>
    </main>
    <nav class="Terrapin-nav">
      <div class="nav-item"><router-link to="/" exact>Home</router-link></div>
      <div class="nav-item"><router-link to="/summary">Summary</router-link></div>
    </nav>
  </div>
  <footer>
    <p>
      Footer
    </p>
  </footer>
  </body>
</template>

<script>
</script>
