<template>
  <div class="v-list-item">
    <div v-if="icon-left" class=".v-list-item-icon">
        <i :class="`icon ${icon}`"></i>
    </div>
    <div v-if="label" class="v-list-item-label">
        <span class="v-list-item-label-text">{{ label }}</span>
        <span v-if="sublabel">{{ sublabel }}</span>
    </div>
    <div v-if="icon-right" class=".v-list-item-icon">
        <i :class="`icon ${icon}`"></i>
    </div>
  </div>
</template>

<script>
export default {
    props:['label', 'sublabel', 'icon-left', 'icon-right'],
    name:'VListItem'

}
</script>

<style>
    .v-list-item {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
    }

    .v-list-item-label {
        display: flex;
        flex-direction: column;
        min-width: 100px;
    }

    .v-list-item-icon {
        display:flex;
        /* justify-content: center;
        align-items: center; */
    }
</style>
