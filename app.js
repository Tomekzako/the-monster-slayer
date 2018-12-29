new Vue({
    el: "#app",
    data: {
        healthbarWidthOne: 375,
        healthbarWidthTwo: 375,
        hitPoints: []
    },
    methods: {
        attack() {
            let randomNumberOne = Math.floor(Math.random() * 10) + 1;
            let randomNumberTwo = Math.floor(Math.random() * 10) + 1;
            this.hitPoints.push('Monster hits player for ' + randomNumberOne);
            this.hitPoints.push('Player hits player for ' + randomNumberTwo);
            this.healthbarWidthOne -= randomNumberOne;
            this.healthbarWidthTwo -= randomNumberTwo;
            console.log(this.hitPoints)
        }
    }
});