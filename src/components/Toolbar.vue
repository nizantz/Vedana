<template>
  <div class="v-toolbar"
    :style="`background:${ bg ? bg : '#41B883' }`">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: ['bg'],
    name: 'v-toolbar'
}
</script>

<style>
    .v-toolbar {
        width:100%;
        height: 45px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom: 1px solid rgba(0,0,0,0.25)
    }
</style>
