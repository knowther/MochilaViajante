package aquarium

fun main() {
    buildAquarium()
}

fun buildAquarium(){
    var myAquarium = Aquarium()
    println("Lenght: ${myAquarium.length}" + "Width: ${myAquarium.width}" + "Height: ${myAquarium.height}")

    myAquarium.height = 80

    println("Height updated to: ${myAquarium.height} cm")
    println("Aquarium volume: ${myAquarium.volume}")

    val smallAquarium = Aquarium(20, 15, 30)
    println("Small Aquarium: ${smallAquarium.volume} liters")

    val aquariumFish = Aquarium(numberOfFish = 6)
    println("Aquarium with ${aquariumFish.volume} liters")
}