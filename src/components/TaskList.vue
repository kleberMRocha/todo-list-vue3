<template>
  <ul class="task-list">
    <h2>Todo List</h2>
    <template v-for="task in list" :key="task.id">
      <li>
        <P>
          {{ task.taskName }} |
          <span :class="handleColor(task.taskLabel)">{{ task.taskLabel }}</span>
        </P>
        <div class="task-list-actions">
          <button @click="store.setEdit(task)">Editar</button>
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

    const handleColor = (value) => {
      const classNames = {
        Low: 'low',
        Medium: 'medium',
        High: 'high',
      };

      return classNames[value];
    };

    return { list, handleColor, store };
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
  position: relative;
}
.task-list li div {
  align-self: center;
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.task-list-actions {
  border: 1px dashed rgba(0, 0, 0, 0.5);
  padding: 8px;
}

.task-list-actions button {
  background: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 4px;
}

.task-list-actions :nth-child(1) {
  background: #eccd19;
  color: rgb(29, 29, 29);
}

.task-list-actions :nth-child(2) {
  background: #e43105;
  color: rgb(255, 255, 255);
}

.low {
  background: cornflowerblue;
  color: rgb(44, 44, 99);
  padding: 4px;
  border-radius: 4px;
}
.high {
  background: tomato;
  color: rgb(139, 41, 24);
  padding: 4px;
  border-radius: 4px;
}
.medium {
  background: rgb(247, 160, 31);
  color: rgb(80, 45, 0);
  padding: 4px;
  border-radius: 4px;
}
</style>
