import java.util.*
import kotlin.math.tan

fun main() {
//    feedTheFish()
    println(shouldChangeWater("Sunday"))
}

fun feedTheFish(){
    val day = randomDay()
    val food = "pellets"
    println("Today is ${day} and fish eat ${fishFood(day)}")
    shouldChangeWater(day)

}

fun getDirtySensorRead () = 20

fun shouldChangeWater(day: String, temperature: Int = 22, dirty: Int =getDirtySensorRead()): Boolean{

    return when{
        isTooHot(temperature)-> true
        isDirty(dirty) -> true
        isSunday(day) -> true
        else -> false
    }
}


var dirty = 20

val waterFilter: (Int) -> Int = {dirty -> dirty/2}

fun feedFish(dirty: Int) = dirty + 10

fun updateDirty(dirty: Int, operation: (Int) -> Int ): Int{
    return operation(dirty)
}

fun dirtyProcessor(){
    dirty = updateDirty(dirty, waterFilter)
    dirty = updateDirty(dirty, ::feedFish)
}

fun isTooHot(temperature: Int) : Boolean = temperature > 30
fun isDirty(dirty: Int) = dirty > 30
fun isSunday (day: String) = day == "Sunday"

fun canAddFish(tankSize: Double, currentFish: List<Int>, fishSize: Int = 2, hasDecoration: Boolean = true ): Boolean{
    return (tankSize * if (hasDecoration) 0.8 else 1.0) >= (currentFish.sum()+ fishSize)
//    var totalTankSize: Int = 0
//    for (i in 0..currentFish.size-1){
//        totalTankSize += currentFish[i]
//    }
//    if(hasDecoration){
//        var newTankSize: Int = (0.8 * tankSize).toInt() ;
//       return newTankSize >= totalTankSize + fishSize
//
//    }else{
//        return tankSize >= totalTankSize + fishSize
//    }
}


fun swim(speed: String ="fast"){
    println("swimming ${speed}")
}

fun randomDay(): String{
    val week = listOf<String>("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    return week[Random().nextInt(7)]
}

fun fishFood(day: String) : String{
    var food = "fasting"
    when(day){
        "Monday" -> food = "flakes"
        "Tuesday" -> food ="pellets"
        "Wednesday" -> food = "redworms"
        "Thursday" -> food = "granules"
        "Friday" -> food = "mosquitoes"
        "Saturday" -> food = "lettuce"
        "Sunday" -> food = "plankton"
    }
    return food
}

