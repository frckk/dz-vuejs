<template>
  <div id="app">
    <Card
      title="Card title"
      text="Some quick example text to build on the card"
      buttonText="Go somewhere"
    />
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