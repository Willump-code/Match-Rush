export const usePopUpEndGame = defineStore("popUpEndGame", () => {
    const isOpen = ref<boolean>(false);

    return { isOpen };
});
