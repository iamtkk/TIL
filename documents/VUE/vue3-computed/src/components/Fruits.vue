<template>
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li 
        v-for="fruit in fruits" 
        v-bind:key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return {
      fruits: [
        'Apple','Banana','Cherry'
      ]
    }
  },
  computed: {
    hasFruit(){
      return this.fruits.length > 0
    }
  }
}
</script>