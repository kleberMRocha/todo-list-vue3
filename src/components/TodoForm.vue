<template>
  <div class="container">
    <div class="container-header">
      <h1>Todo List Vue3</h1>
    </div>
    <form class="container-form">
      <fieldset>
        <legend>Tarefa:</legend>
        <input v-model="taskName" type="text" maxlength="25" />
      </fieldset>
      <fieldset>
        <legend>Prioridade:</legend>
        <select v-model="taskLabel">
          <template v-for="item in optTaskLabel" :key="item">
            <option>{{ item }}</option>
          </template>
        </select>
      </fieldset>
      <span class="container-preview">
        <b>Nome: {{ taskName }}</b>
        <span>{{ taskLabel }}</span>
      </span>
      <button @click="addTask()" type="button">Adicionar</button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useTaskList } from '../store/useTaskList';

export default {
  setup() {
    const store = useTaskList();
    const optTaskLabel = ref(['high', 'Medium', 'Low']);
    let taskLabel = ref('');
    let taskName = ref('');

    const isTaskFilled = computed(() => {
      return !!(taskLabel.value.length && taskName.value.length);
    });

    const addTask = () => {
      store.add({ taskName, taskLabel });
      taskName.value = '';
      taskLabel.value = '';
    };

    return {
      isTaskFilled,
      optTaskLabel,
      taskLabel,
      taskName,
      addTask,
      store,
    };
  },
};
</script>

<style>
.container {
  max-width: 300px;
  margin: 0 auto;
  background: #f5f5f5;
  min-height: 350px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px #2929293d;
  padding: 0 8px;
}
.container-header {
  color: #ffffff;
  border-radius: 8px 8px 0 0;
  background: url('../assets/img1.jpg');
  text-shadow: 1px 1px 1px black;
  background-size: cover;
  background-position-y: -150px;
  height: 110px;
  opacity: 0.7;
}

.container button {
  width: 100%;
  margin: 8px 0;
  cursor: pointer;
  height: 30px;
  background: #030b24;
  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
}
.container button:hover {
  background: #081846;
}

.container-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container-form fieldset {
  border: 1px solid #2847a5;
  border-radius: 4px;
  background: #ffffff;
  padding: 8px;
  margin-top: 8px;
}

.container-form fieldset legend {
  color: #2847a5;
  font-weight: bold;
}

.container-form fieldset input,
select {
  width: 100%;
  height: 30px;
  background: none;
  border: transparent;
}

.container-preview {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  widows: 100%;
  justify-content: space-between;
  padding: 8px;
  margin: 8px 0;
  border: dashed 1px gray;
}
</style>
