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
            this.hitPoints.push('Player hits player for ' + randomNumberTwo);
            this.healthbarWidthOne -= randomNumberOne;
            this.healthbarWidthTwo -= randomNumberTwo;
        }
    }
});