<template>
  <div>
    <AppHeader />
    <AppBody />
    <AppFooter />
    <main>
      <h1>Чисто для проверки счетчика и что pinia работает</h1>
      <button @click="increment">Increment</button>
      <p>Count+: {{ count }}</p>
      <p>Double count*2: {{doubleCount }}</p>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from "./components/header.vue"
import AppBody from "./components/body.vue"
import AppFooter from "./components/footer.vue"
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: "App",
  components: { AppHeader, AppBody, AppFooter },
  setup() {
      const store = useCounterStore()
      const { count, doubleCount } = storeToRefs(store)
      const { increment } = store

      return { count, doubleCount, increment }

  }
})

</script>
