<template>
    <input
        :type="type ? type : 'text'"
        :placeholder="placeholder ? placeholder : ''"
        :style="styles"
        class="v-input"
        @input="set"
        />
</template>

<script>
export default {
    props: ['type', 'placeholder', 'color', 'bg', 'width', 'height', 'border'],
    name: 'v-input',
    methods: {
        set (e, forceUpdate) {
            let val = e && e.target ? e.target.value : e
            this.$emit('input', val)
        }
    },
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
    .v-input {
        height: 35px;
        box-shadow: none;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 5px;
    }

    input:focus {
        outline-width: 0;
    }
</style>
