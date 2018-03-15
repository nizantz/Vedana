<template>
  <div class="logo" :style="{'justify-content': justify}">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'v-toolbar-logo',
    props: ['justify']
}
</script>

<style scoped>
    .logo {
        height: 45px;
        width: 100%;
        display:flex;
        flex-direction:row;
    }
</style>
