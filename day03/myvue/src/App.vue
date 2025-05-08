<script>
import UserProfile from "./components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },

  data() {
    return {
      userName: "신세계",
      age: 35,
    };
  },

  methods: {
    printHello() {
      alert("안녕하세요!");
    },
    onPrintHello(name, age) {
      alert(`${name}, ${age}`);
    },
  },
};
</script>

<template>
  <UserProfile
    @print-hello="printHello"
    @onPrint-hello="(name, age) => onPrintHello(name, age)"
  />
</template>

<style scoped></style>
