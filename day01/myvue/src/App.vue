<script>
export default {
  data() {
    return {
      gender: "male",
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
    <label for="male">
      <input type="radio" v-model="gender" value="male" />남성
    </label>
    <label for="female">
      <input type="radio" v-model="gender" value="female" />여성
    </label>
    <button type="button" @click="printData">확인</button>
  </form>
</template>
