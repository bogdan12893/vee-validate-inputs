<script setup>
import { useForm } from 'vee-validate';

const form = reactive({
  email: '',
  password: '',
  terms: false,
});

const formSchema = computed(() => {
  return {
    email: 'required|email',
    password: 'required',
    terms: 'required',
  };
});

const { validate, errors } = useForm({
  validationSchema: formSchema,
});

const scrollToValidation = (errorName) => {
  const el = document.querySelector(`[name="${errorName}"]`);
  if (el) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
};

const handleFormSubmit = async () => {
  const validator = await validate();

  const firstErrorFieldName = Object.keys(errors.value)[0];
  scrollToValidation(firstErrorFieldName);

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
    AppCheckbox(name="terms" inputId="terms" v-model="form.terms" :value="true" text="Terms check!")
    div(class="h-[1000px] w-1/2 bg-gray-100 p-8 my-4")
      p Scroll to invalid validation check
  button(@click.prevent="handleFormSubmit" type="submit") Submit

  pre {{ form }}
</template>
