<template>
  <TodoForm />
  <TaskList />
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TaskList from './components/TaskList.vue';
import './shared/global.css';
export default {
  name: 'App',
  components: {
    TodoForm,
    TaskList,
  },
};
</script>

<style>
#app {
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  background-size: cover;
  height: auto;
  padding: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
