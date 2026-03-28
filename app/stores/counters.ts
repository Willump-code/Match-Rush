export const useCounters = defineStore('counters', ()=>{
    const counterClassic = ref(0);
    const counterBlitz = ref(0);
    const counterMarathon = ref(0);

    return { counterClassic, counterBlitz, counterMarathon }
})