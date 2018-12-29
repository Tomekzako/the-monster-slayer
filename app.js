new Vue({
    el: "#app",
    data: {
        healthbarWidthOne: 375,
        healthbarWidthTwo: 375,
        hitPoints: []
    },
    methods: {
        attack(n) {
            let randomNumberOne = Math.floor(Math.random() * 10) + n;
            let randomNumberTwo = Math.floor(Math.random() * 10) + n;
            this.hitPoints.push('Monster hits player for ' + randomNumberOne);
            this.hitPoints.push('Player hits monster for ' + randomNumberTwo);
            this.healthbarWidthOne -= randomNumberOne;
            this.healthbarWidthTwo -= randomNumberTwo;
        },
        heal() {
            let randomNumberOne = Math.floor(Math.random() * 10) + 11;
            let randomNumberTwo = Math.floor(Math.random() * 10) + 11;
            this.hitPoints.push('Monster hits player for ' + randomNumberOne);
            this.hitPoints.push('Player heals himself for ' + randomNumberTwo);
            this.healthbarWidthOne -= randomNumberOne;
            this.healthbarWidthOne += randomNumberTwo;
        }
    }
});