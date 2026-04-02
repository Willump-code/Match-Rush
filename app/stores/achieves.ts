export const useAchieves = defineStore(
    "achieves",
    () => {
        const allAchieves = [
            {
                id: "classic5",
                description: "Набери 5 очков в классическом режиме",
                icon: "5",
            },
            {
                id: "classic20",
                description: "Набери 20 очков в классическом режиме",
                icon: "20",
            },
            {
                id: "classic100",
                description: "Набери 100 очков в классическом режиме",
                icon: "100",
            },
            {
                id: "blitz3",
                description: "Установи рекорд в 3 очка в режиме блиц",
                icon: "👨‍🦯‍➡️​​​",
            },
            {
                id: "blitz8",
                description: "Установи рекорд в 8 очка в режиме блиц",
                icon: "🚶‍♂️‍➡️",
            },
            {
                id: "blitz15",
                description: "Установи рекорд в 15 очка в режиме блиц",
                icon: "🏃‍♂️‍➡️",
            },
            {
                id: "marathon5",
                description: "Набери 5 очков в режиме марафон",
                icon: "🦥",
            },
            {
                id: "marathon12",
                description: "Набери 12 очков в режиме марафон",
                icon: "🦧",
            },
            {
                id: "marathon20",
                description: "Набери 20 очков в режиме марафон",
                icon: "🐉",
            },
        ] as const;
        const finishedAchieves = ref<(typeof allAchieves)[number]["id"][]>([]);
        return { allAchieves, finishedAchieves };
    },
    {
        persist: true,
    },
);
