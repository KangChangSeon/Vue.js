<script>
export default {
  data() {
    return {
      // inputStr: "",
      arr: [0, 1, 2],
      obj: { name: "Seon" },
      primaryColor: "red",
      primaryStyle: "italic",
    };
  },

  watch: {
    // inputStr(newValue, oldValue) {
    // console.log(`old value : ${oldValue}`);
    // console.log(`new value : ${newValue}`);
    // },

    arr: {
      handler(newValue, oldValue) {
        console.log(`old value : ${oldValue}`);
        console.log(`new value : ${newValue}`);
      },
      deep: true,
    },

    obj: {
      handler(oldValue, newValue) {
        console.log(`old value : ${JSON.stringify(oldValue)}`);
        console.log(`new value : ${JSON.stringify(newValue)}`);
      },
      deep: true,
    },
  },

  computed: {},

  methods: {},
};
</script>

<template>
  <!-- <input type="text" v-model="inputStr" /> -->
  <h1 style="color: blue; font-style: italic">{{ arr }}</h1>
  <h1>{{ obj }}</h1>

  <button @click="arr.push(3)">배열 변경</button>
  <button @click="obj.age = 20">객체 변경</button>

  <h1 :style="{ color: primaryColor, fontStyle: primaryStyle }">
    inline style
  </h1>
  <h1>Internal Style</h1>
  <h2>CSS Style</h2>
</template>

<style scoped>
@import "~/main.css";
h1 {
  color: green;
  font-style: italic;
}
</style>
