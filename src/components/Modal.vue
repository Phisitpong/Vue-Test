<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> Picture </slot>
          </div>

          <div class="modal-body">
            <img alt="Vue logo" :src="`${imgPath}`" />
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('back')">
                Back
              </button>
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
              <button class="modal-default-button" @click="$emit('next')">
                Next
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    imgPath: String
  },
};
</script>



