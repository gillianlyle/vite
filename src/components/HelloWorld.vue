<template>
  <div :class="{ error: v$.firstName.$errors.length }">
    <label for="firstName">First name:</label>
    <input id="firstName" class="input" v-model="firstName">
    <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'

  export default {
    name: 'HelloWorld',
    setup () {
      return { v$: useVuelidate() }
    },
    data () {
      return {
        firstName: '',
      }
    },
    validations () {
      return {
        firstName: { required: helpers.withMessage('First name is required', required), $autoDirty: true, $lazy: true },
      }
    }
  }

</script>

<script setup>

</script>

<style scoped>
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}

.error-msg {
  color:red;
}

</style>
