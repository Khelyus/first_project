<template>
  <div>
    <AppHeader />
    <AppBody />
    <main>
      <h1>...</h1>
    </main>
  </div>
</template>

<script lang="ts">
import AppHeader from "./components/header.vue"
import AppBody from "./components/body.vue"

export default {
  name: "App",
  components: { AppHeader, AppBody }
}
</script>
