<script setup>
import { useForm } from 'vee-validate';

const form = ref({
  selectedBike: '',
});

const formSchema = computed(() => {
  return {
    bikes: 'required',
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
.radio-form
  h1 Radio Form
  form
    p Select bike style:
    AppRadio(name="bikes" inputId="road-bike" v-model="form.selectedBike" value="road bikes" text="road bikes")
    AppRadio(name="bikes" inputId="mtn-bike" v-model="form.selectedBike" value="mountain bikes" text="mountain bikes")
  button(@click.prevent="handleFormSubmit" type="submit") Submit

  pre {{ form }}
</template>
