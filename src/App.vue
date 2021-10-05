<template>
  <div :class="{ error: v$.firstName.$errors.length }">
    <BaseInput 
      id="firstName" 
      v-model="firstName" 
      class="input" 
      label="First name" 
      placeholder="Enter first name" 
    />
    <div
      v-for="error of v$.firstName.$errors"
      :key="error.$uid"
      class="input-errors"
    >
      <div class="error-msg">
        {{ error.$message }}
      </div>
    </div>
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, helpers } from '@vuelidate/validators'
  import BaseInput from './components/BaseInput.vue';

  export default {
    name: 'HelloWorld',
    components: {
      BaseInput
    },
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
.error-msg {
  color:red;
}

</style>
