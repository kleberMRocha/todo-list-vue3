import { defineStore } from 'pinia';

export const useTaskList = defineStore('Main', {
    state: () => ({
        list: []
    }),
    getters: {
        getList: (state) => state.list
    },
    actions: {
        add(task) {
            this.list = [...this.list, task]
        }
    }
});