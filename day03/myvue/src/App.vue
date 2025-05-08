<script>
import FirstChild from "./components/FirstChild.vue";

export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      domEl: null,
    };
  },
  mounted() {
    const childNum = this.$refs.child.number;
    const childDoubleNum = this.$refs.child.doubleNum;
    console.log(`메서드 호출 전 : ${childNum}`);
    console.log(`메서드 호출 전 : ${childDoubleNum}`);
    setTimeout(() => {
      this.$refs.child.increment();
      console.log(`메서드 호출 전 : ${childNum}`);
      console.log(`메서드 호출 전 : ${childDoubleNum}`);
    }, 1000);
  },
};
</script>
<template>
  <FirstChild ref="child"></FirstChild>
</template>
<style></style>
