<script setup>
import { useForm } from 'vee-validate';

const form = reactive({
  file: null,
});

const formSchema = computed(() => {
  return {
    fileInput: 'required',
  };
});

const { validate } = useForm({
  validationSchema: formSchema,
});

const getSelectedFile = (file) => {
  form.file = file;
};

const handleFormSubmit = async () => {
  const validator = await validate();

  if (!validator.valid) {
    return;
  }

  alert('Submited');
};
</script>

<template lang="pug">
.file-form
  h1 File Form
  form
    AppFileInput(inputName="fileInput" @selectedFile="getSelectedFile")
  button(@click.prevent="handleFormSubmit" type="submit") Submit

  pre {{ form }}
</template>
