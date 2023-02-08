<script setup>
import { useForm } from 'vee-validate';

const form = ref({
  email: '',
  password: '',
  terms: false,
  selectedFoods: [],
});

const formSchema = computed(() => {
  return {
    password: 'required',
    email: 'required|email',
    terms: 'required',
    foods: 'required',
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
    AppInput(inputType="text" inputName="email" placeholder="email" v-model="form.email")
    AppInput(inputType="password" inputName="password" placeholder="password" v-model="form.password")
    AppCheckbox(name="terms" v-model="form.terms" :value="true" text="Terms check!")
    p Select foods:
    AppCheckbox(name="foods" v-model="form.selectedFoods" value="burger" text="burger")
    AppCheckbox(name="foods" v-model="form.selectedFoods" value="pizza" text="pizza")
    AppCheckbox(name="foods" v-model="form.selectedFoods" value="pasta" text="pasta")
  button(@click.prevent="handleFormSubmit" type="submit") Submit

  pre {{ form }}
</template>
