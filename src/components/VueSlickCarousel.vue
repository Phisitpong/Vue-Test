<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  
  // optional style for arrows & dots
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>
