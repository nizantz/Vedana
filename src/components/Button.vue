<template>
  <button
    class="v-button"
    @click="$emit('click')"
    :style="styles">
      <slot></slot>
  </button>
</template>

<script>
export default {
    props: ['border', 'height', 'width', 'color'],
    name:'v-button',
    computed: {
        styles () {
            let styleStr = '';
            if (this.$props.border) {
                styleStr += `border:${this.$props.border};`
            }
            if (this.$props.height) {
                styleStr += `height:${this.$props.height};`
            }
            if (this.$props.width) {
                styleStr += `width:${this.$props.width};`
            }
            if (this.$props.bg) {
                styleStr += `background:${this.$props.bg};`
            }
            if (this.$props.color) {
                styleStr += `color:${this.$props.color};`
            }
            return styleStr
        }
    }
}
</script>
<style>
    .v-button {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.2);
        cursor: pointer;
        height: 31px;
        min-width: 200px;
        height: 35px;
    }

    button:focus {
        outline-width: 0;
    }
</style>
