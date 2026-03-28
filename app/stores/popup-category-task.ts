export const usePopUpCategoryTask = defineStore("popUpCategoryTask", () => {
    const isOpen = ref<boolean>(false);

    return { isOpen };
});
