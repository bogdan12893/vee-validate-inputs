<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});

const { handleChange, errorMessage } = useField(props.name, undefined, {
  type: 'checkbox',
  initialValue: props.modelValue,
  checkedValue: props.value,
  uncheckedValue: false,
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
      :checked="modelValue"
      @input="handleChange(value)"
    )
    span.ml-2 {{ text }}
  .error {{ errorMessage }}
</template>

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
