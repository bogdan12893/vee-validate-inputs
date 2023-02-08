<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  inputName: {
    type: String,
    default: 'text',
  },
});

const selectedFile = ref(null);

const emit = defineEmits(['selectedFile']);

const { errorMessage, handleChange } = useField(props.inputName);

const handleFile = (event) => {
  selectedFile.value = event.target.files[0];
  emit('selectedFile', selectedFile.value);
};
</script>

<template lang="pug">
.app-file-input
  input(
    type="file"
    :name="inputName"
    :id="inputName"
    @change="handleChange($event, handleFile($event))"
  )
  .error {{ errorMessage }}

</template>

<style lang="scss" scoped>
.app-file-input {
  @apply my-3;

  .error {
    @apply text-red-600 text-xs;
  }
}
</style>
