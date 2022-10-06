<template>
  <div id="app">
    <Navigation />
    <main class="py-4">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

  export default{
    components: {
    Navigation
}
  }
</script>
