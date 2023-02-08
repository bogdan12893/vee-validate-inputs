<script setup>
const checkedNames = ref(['Jack']);
</script>

<template>
  <div>Checked names: {{ checkedNames }}</div>

  <input id="jack" v-model="checkedNames" type="checkbox" value="Jack" />
  <label for="jack">Jack</label>

  <input id="john" v-model="checkedNames" type="checkbox" value="John" />
  <label for="john">John</label>

  <input id="mike" v-model="checkedNames" type="checkbox" value="Mike" />
  <label for="mike">Mike</label>
</template>
