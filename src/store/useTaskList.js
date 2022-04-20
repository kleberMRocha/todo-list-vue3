import { defineStore } from 'pinia';

export const useTaskList = defineStore('Main', {
    state: () => {
        return {
            list: []
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
        }
    }
});