<script>
export default {
  data() {
    return {
      inputItem: "",
    };
  },

  methods: {
    login() {
      console.log(`id : ${this.uid}`);
      console.log(`pw : ${this.upw}`);
    },
    printData() {
      console.log(`gender : ${this.gender}`);
    },
  },
};
</script>

<template>
  <form id="loginForm">
    <input type="text" v-model="inputItem" />{{ inputItem }}
  </form>
</template>
