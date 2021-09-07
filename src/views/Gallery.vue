<template>
  <div class="gallery">
    <div class="container">
      <h1>This is an gallery page</h1>
      <div class="grid-container">
        <div v-for="item in state.listImage" v-bind:key="item" class="grid-item">
          <div @click="onSelect(item.id, item.path)">
            <img alt="Vue logo"  :src="item.path" />
            <!-- <img :src="require(`../assets/Fruits_Pic/fruit-01.jpg`)" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal
    v-if="state.isShowModal"
    @close="state.isShowModal = false"
    @back="back(state.imgID)"
    @next="next(state.imgID)"
    :imgPath="state.imgPath"
  >
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
  </modal>
  <vCarousel></vCarousel>
</template>



<script>
import { defineComponent, reactive } from "vue";
import Modal from "../components/Modal";
import VCarousel from "../components/VueSlickCarousel";
export default defineComponent({
  name: "Gallery",
  components: {
    Modal,
    VCarousel
  },
  setup() {
    const state = reactive({
      isShowModal: false,
      imgID: null,
      imgPath: null,
      listImage: [
        { id: 1, path: require("../assets/Fruits_Pic/fruit-01.jpg") },
        { id: 2, path: require("../assets/Fruits_Pic/fruit-02.jpg") },
        { id: 3, path: require("../assets/Fruits_Pic/fruit-03.jpg") },
        { id: 4, path: require("../assets/Fruits_Pic/fruit-04.jpg") },
        { id: 5, path: require("../assets/Fruits_Pic/fruit-05.jpg") },
        { id: 6, path: require("../assets/Fruits_Pic/fruit-06.jpg") },
        { id: 7, path: require("../assets/Fruits_Pic/fruit-07.jpg") },
        { id: 8, path: require("../assets/Fruits_Pic/fruit-08.jpg") },
        { id: 9, path: require("../assets/Fruits_Pic/fruit-09.jpg") },
        { id: 10, path: require("../assets/Fruits_Pic/fruit-10.jpg") },
        { id: 11, path: require("../assets/Fruits_Pic/fruit-11.jpg") },
        { id: 12, path: require("../assets/Fruits_Pic/fruit-12.jpg") },
      ]
    });

    function onSelect(index, path) {
      state.imgID = index;
      state.imgPath = path;
      state.isShowModal = true;
    }

    function back(index) {
      if (index > 1) {
        state.imgID = index - 1;
        state.imgPath = state.listImage[state.imgID - 1].path;
      } else {
        state.imgID = 12;
        state.imgPath = state.listImage[11].path;
      }
    }

    function next(index) {
      if (index < 12) {
        state.imgID = index + 1;
        state.imgPath = state.listImage[state.imgID - 1].path;
      } else {
        state.imgID = 1;
        state.imgPath = state.listImage[0].path;
      }
    }

    return {
      onSelect,
      back,
      next,
      state,
    };
  },
});

</script>
