<template>
  <div id="app">
    <Card title="task 1" />
    <Card text="task 2" />
    <Card title="task 3 title" text="task 3 text" />
    <Card />
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>