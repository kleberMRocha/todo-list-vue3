<template>
  <ul class="task-list">
    <h2>Todo List</h2>
    <template v-for="task in list" :key="task.id">
      <li>
        <P> {{ task.taskName }} | {{ task.taskLabel }} </P>
        <div>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
import { useTaskList } from '../store/useTaskList';
import { storeToRefs } from 'pinia';
export default {
  setup() {
    const store = useTaskList();
    const { list } = storeToRefs(store);

    return { list };
  },
};
</script>

<style>
.task-list {
  list-style: none;
  margin: 0 auto;
  padding: 16px;
  color: white;
  height: 100vh;
}

.task-list li {
  background: white;
  max-width: 350px;
  margin: 8px auto;
  color: #081846;
  font-weight: bold;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
.task-list li div {
  align-self: center;
  margin-left: auto;
  display: flex;
  gap: 4px;
}
</style>
