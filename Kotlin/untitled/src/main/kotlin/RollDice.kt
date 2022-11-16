import java.util.*

fun main() {

    println(rollDice(1))

//    var rollDice2: (Int) -> Int
    gamePlay(rollDice(3))
    gamePlay(rollDice(8))


}


var rollDice= {slides: Int -> if(slides.equals(0)) 0 else Random().nextInt(12) }
fun gamePlay(diceRoll: Int) {
    println(diceRoll)
}


