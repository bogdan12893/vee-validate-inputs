<script setup>
import { useForm } from 'vee-validate';

const form = ref({
  selectedFoods: [],
});

const formSchema = computed(() => {
  return {
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
.checkbox-form
  h1 Checkbox Form
  form
    p Select foods:
    AppCheckbox(name="foods" inputId="burger" v-model="form.selectedFoods" value="burger" text="burger")
    AppCheckbox(name="foods" inputId="pizza" v-model="form.selectedFoods" value="pizza" text="pizza")
    AppCheckbox(name="foods" inputId="pasta" v-model="form.selectedFoods" value="pasta" text="pasta")
  button(@click.prevent="handleFormSubmit" type="submit") Submit

  pre {{ form }}
</template>
