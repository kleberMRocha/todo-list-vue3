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
      <button
        :disabled="!isTaskFilled"
        @click="isEdit ? editTask() : addTask()"
        type="button"
      >
        {{ isEdit ? 'Editar' : 'Adicionar' }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useTaskList } from '../store/useTaskList';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const store = useTaskList();
    const { isEdit, valuesToEdit, list } = storeToRefs(store);

    const optTaskLabel = ref(['High', 'Medium', 'Low']);
    let taskLabel = ref('');
    let taskName = ref('');

    const cleanValues = () => {
      taskLabel.value = '';
      taskName.value = '';
    };

    watch(isEdit, (value) => {
      if (value) {
        taskLabel.value = valuesToEdit.value.taskLabel;
        taskName.value = valuesToEdit.value.taskName;
        return;
      }

      cleanValues();
      valuesToEdit.value = {};
    });

    const isTaskFilled = computed(() => {
      return !!(taskLabel.value.length && taskName.value.length);
    });

    const addTask = () => {
      const task = Object.assign(
        {},
        {
          id: store.getId,
          taskName: taskName.value,
          taskLabel: taskLabel.value,
        }
      );

      store.add(task);
      cleanValues();
    };

    const editTask = () => {
      const { id } = valuesToEdit.value;
      list.value.map((t) => {
        if (t.id === id) {
          t.taskName = taskName.value;
          t.taskLabel = taskLabel.value;
        }
        return t;
      });

      isEdit.value = false;
    };

    return {
      isTaskFilled,
      optTaskLabel,
      taskLabel,
      taskName,
      addTask,
      editTask,
      store,
      isEdit,
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
