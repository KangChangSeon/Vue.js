<script>
import "./assets/todo.css";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
  },
  data() {
    return {
      todo: [],
      current: "all",
    };
  },
  computed: {
    computedTodo() {
      if (this.current === "all") {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // 고유한 값
        msg: inputMsg, // 할 일 텍스트
        completed: false, // 할 일 완료 여부
        change: false,
      };
      this.todo.push(item); //item(할일 목록 객체 데이터)를 todo 배열에 추가한다.
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },
    changeTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, change: true } : v
      );
    },
    saveTodo({ id, Msg }) {
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, msg: Msg, change: false } : v
      );
    },
  },
};
</script>
<template>
  <div class="todo">
    <TodoHeader :current @update-tab="updateTab" />
    <!-- TodoList 컴포넌트로 computedtodo 데이터를 전달 -->
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @change-todo="changeTodo"
      @save-todo="saveTodo" />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
