new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack() {

            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage

            if (this.checkWin()) return

            var damage = this.calculateDamage(3, 5)
            this.monsterHealth -= damage

            this.checkWin()
        },
        specialAttack() {

        },
        heal() {

        },
        giveUp() {

        },
        calculateDamage(min, max) {
            return damage = Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin() {

            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?'))
                    this.startGame()
                else
                    this.gameIsRunning = false
                return true
            }

            else if (this.playerHealth <= 0) {
                if (confirm('You won! New Game?'))
                    this.startGame()
                else
                    this.gameIsRunning = false
                return true
            }

            return false
        }
    }
})