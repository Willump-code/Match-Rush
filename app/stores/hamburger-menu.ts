export const useHamburgerMenu = defineStore('hamburger-menu', ()=>{
    const isOpen = ref<boolean>(false)

    return {isOpen}
})