<template>
  <div>
    <AppHeader />
    <AppBody />
    <AppFooter />
    <main>

    </main>
  </div>
</template>

<script lang="ts">
import AppHeader from "./components/header.vue"
import AppBody from "./components/body.vue"
import AppFooter from "./components/footer.vue"

export default {
  name: "App",
  components: { AppHeader, AppBody, AppFooter, }
}
</script>
