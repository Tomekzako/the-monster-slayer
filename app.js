new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        hitPoints: [],
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.hitPoints = []
        },
        attack(n) {
            let randomNumberOne = Math.floor(Math.random() * 10) + n;
            let randomNumberTwo = Math.floor(Math.random() * 10) + n;
            this.hitPoints.push('Monster hits player for ' + randomNumberOne);
            this.hitPoints.push('Player hits monster for ' + randomNumberTwo);
            this.playerHealth -= randomNumberOne;
            this.monsterHealth -= randomNumberTwo;

            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
                return;
            }
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

        },
        heal() {
            let randomNumberOne = Math.floor(Math.random() * 10) + 11;
            let randomNumberTwo = Math.floor(Math.random() * 10) + 11;
            this.hitPoints.push('Monster hits player for ' + randomNumberOne);
            this.hitPoints.push('Player heals himself for ' + randomNumberTwo);
            this.playerHealth -= randomNumberOne;
            this.playerHealth += randomNumberTwo;
        }
        
    }
});