<template>
  <label :for="id">{{ label }}</label>
  <input 
    :id="id" 
    class="base-input" 
    :placeholder="placeholder" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>
<script>
export default {
    name: 'BaseInput',
    props:{
        id:{
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
}
</script>
<style scoped>
    .base-input {
        @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
    }
</style>