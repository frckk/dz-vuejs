<template>
  <div v-if="title || text" class="card">
    <div v-if="title || text" class="card-body">
      <h4 v-if="title" class="card-title">{{ title }}</h4>
      <p v-if="text" class="card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard', // Use a multi-word name???
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>