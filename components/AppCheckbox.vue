<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: null,
    default: null,
  },
  value: {
    type: null,
    default: null,
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
const { name } = toRefs(props);

const { handleChange, errorMessage } = useField(name, undefined, {
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
