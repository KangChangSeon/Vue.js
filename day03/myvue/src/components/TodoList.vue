<script>
export default {
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    updateTodo(id) {
      this.$emit("update-todo", id);
    },
    changeTodo(id) {
      this.$emit("change-todo", id);
    },
    saveTodo(id, Msg) {
      this.$emit("save-todo", { id, Msg });
    },
  },
};
</script>
<template>
  <div class="todo__list">
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }">
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)" />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"></label>
      <input
        v-if="item.change"
        class="todo__item-text"
        :value="item.msg"
        @keyup.enter="saveTodo(item.id, $event.target.value)" />
      <span v-else class="todo__item-text">{{ item.msg }}</span>
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete</span
      >
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="changeTodo(item.id)"
        >change</span
      >
    </div>
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
