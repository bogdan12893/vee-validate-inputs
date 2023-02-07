<script setup>
import { useForm } from 'vee-validate';
const email = ref('');
const password = ref('');
const checkbox = ref(false);

const formSchema = computed(() => {
  return {
    password: 'required',
    email: 'required|email',
    checkbox: 'required',
  };
});

const { validate } = useForm({
  validationSchema: formSchema,
});

const handleFormSubmit = async () => {
  const validator = await validate();

  if (!validator.valid) {
    return;
  }

  alert('Submited');
};
</script>

<template lang="pug">
.simple-form
  h1 Simple Form

  form
    AppInput(inputType="text" inputName="email" placeholder="email" v-model:modelValue="email")
    AppInput(inputType="password" inputName="password" placeholder="password" v-model:modelValue="password")
    AppCheckbox(name="checkbox" v-model:modelValue="checkbox" :value="true")
  button(@click.prevent="handleFormSubmit" type="submit") Submit
</template>
