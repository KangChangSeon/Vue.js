<script>
export default {
  data() {
    return {
      output: null,
      prev: null,
      cur: null,
      operator: null,
      operateActions: {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
      },
    };
  },

  methods: {
    clear() {
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },
    calculate(n) {
      if (this.operator !== null) {
        this.prev = this.operateActions[this.operator](
          Number(this.prev),
          Number(this.cur)
        );
        this.output = this.prev;
        this.cur = null;
      } else if (this.cur !== null) {
        this.prev = this.cur;
        this.cur = null;
      }
      console.log(n);
      this.operator = n;
    },
    userInput(n) {
      this.cur = this.cur === null ? n : (this.cur += n);
      this.output = this.cur;
      console.log(this.cur);
    },
    operation(e) {
      const n = e.currentTarget.value;
      if (n === "C") {
        this.clear();
      } else if (["+", "-", "*", "/", "="].includes(n)) {
        this.calculate(n);
      } else {
        this.userInput(n);
      }
    },
  },
};
</script>

<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" @click="operation" class="clear" value="C" />
      <input type="button" @click="operation" class="operator" value="/" />
      <input type="button" @click="operation" value="1" />
      <input type="button" @click="operation" value="2" />
      <input type="button" @click="operation" value="3" />
      <input type="button" @click="operation" class="operator" value="*" />
      <input type="button" @click="operation" value="4" />
      <input type="button" @click="operation" value="5" />
      <input type="button" @click="operation" value="6" />
      <input type="button" @click="operation" class="operator" value="+" />
      <input type="button" @click="operation" value="7" />
      <input type="button" @click="operation" value="8" />
      <input type="button" @click="operation" value="9" />
      <input type="button" @click="operation" class="operator" value="-" />
      <input type="button" @click="operation" class="dot" value="." />
      <input type="button" @click="operation" value="0" />
      <input
        type="button"
        @click="operation"
        class="operator result"
        value="="
      />
    </form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type="text"] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
