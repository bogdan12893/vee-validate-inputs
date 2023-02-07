<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: null,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  value: {
    type: Boolean,
    default: false,
  },
});

const { checked, handleChange, errorMessage } = useField(props.name, undefined, {
  type: 'checkbox',
  valueProp: props.value,
  uncheckedValue: false,
  checkedValue: true,
});
</script>

<template lang="pug">
.app-checkbox
  label(:for="name")
    input(
      type="checkbox"
      :name="name"
      :id="name"
      :value="value"
      @input="handleChange($event.target.value)"
    )
    span.ml-2 Please check this box {{ checked }}
  .error {{ errorMessage }}
</template>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.app-checkbox {
  @apply my-3;

  input,
  textarea {
    @apply bg-green-100 py-3 px-4 rounded-md border border-green-500;
  }

  .error {
    @apply text-red-600 text-xs;
  }
}
</style>
