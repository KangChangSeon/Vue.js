<script>
import FirstChild from "./components/FirstChild.vue";
export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      visible: true,
    };
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    setTimeout(() => {
      this.visible = false;
    }, 3000);
    console.log("created");
  },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUnmount() {
  //   console.log("beforeUnmount");
  // },
  // unmounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
};
</script>
<template>
  <h1>업데이트</h1>
  <FirstChild v-if="visible"></FirstChild>
</template>
<style scoped>
h1,
p {
  color: aqua;
}
</style>
