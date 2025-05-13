<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  beforeMount() {
    const name = this.$route.query.name;
    console.log(name);
    const age = this.$route.query.age;
    console.log(age);
  },
};
</script>
<template></template>
