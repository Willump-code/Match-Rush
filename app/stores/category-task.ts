import { allTasksList } from "~/utils/tasks/tasksList";
import type { CategoryTask } from "~/types";

export const useCategoryTask = defineStore("category", () => {
    let selectedTasks = <CategoryTask[]>[];
    resetSelectedTasks();
    function resetSelectedTasks() {
        for (const i of allTasksList) {
            if (!selectedTasks.includes(i.id)) {
                selectedTasks.push(i.id);
            }
        }
    }
    function addSelectedTask(val: CategoryTask) {
        if (!selectedTasks.includes(val)) {
            selectedTasks.push(val);
        }
    }
    function removeSelectedTask(val: CategoryTask) {
        selectedTasks = selectedTasks.filter((e) => e !== val);
    }
    return {
        selectedTasks,
        resetSelectedTasks,
        addSelectedTask,
        removeSelectedTask,
    };
});
