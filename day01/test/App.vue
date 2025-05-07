<script>
export default {
  data() {
    return {
      firstName: "Kang",
      lastName: "ChangSeon",
      numArr: [1, 2, 3, 4, 5],
    };
  },

  computed: {
    fullName() {
      console.log("computed fullname");
      return `${this.firstName} ${this.lastName}`;
    },
    evenSum() {
      return this.numArr
        .filter((v) => v % 2 !== 0)
        .reduce((acc, cur) => acc + cur, 0);
    },
  },
};
</script>

<template>
  <h1>{{ fullName }}</h1>
  <h2>
    {{ numArr.filter((v) => v % 2 === 0).reduce((acc, cur) => acc + cur, 0) }}
  </h2>
  <h2>{{ evenSum }}</h2>
</template>
