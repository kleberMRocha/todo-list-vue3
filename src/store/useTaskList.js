import { defineStore } from 'pinia';

export const useTaskList = defineStore('Main', {
    state: () => {
        return {
            list: [],
            valuesToEdit: {},
            isEdit: false

        }
    },
    getters: {
        getId: (state) => {
            return state.list.length + 1;
        }
    },
    actions: {
        add(task) {
            this.list.push(task);
            localStorage.setItem('@todo-vue3', JSON.stringify(this.list));
        },
        setEdit(task) {
            this.isEdit = true;
            this.valuesToEdit = task;
            localStorage.setItem('@todo-vue3', JSON.stringify(this.list));
        }
    }
});