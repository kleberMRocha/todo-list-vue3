import { defineStore } from 'pinia';

export const useTaskList = defineStore('Main', {
    state: () => {
        return {
            list: []
        }
    },
    getters: {
        getList: (state) => {
            return state.list
        }
    },
    actions: {
        add(task) {
            this.list = [...this.list, task]
        }
    }
});