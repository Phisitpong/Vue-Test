<template>
  <div>
    <VueSlickCarousel v-bind=settings>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'VueSlickCarousel',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: true,
          dots: true,
          dotsClass: "slick-dots custom-dot-class",
          edgeFriction: 0.35,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    }
  }
</script>
