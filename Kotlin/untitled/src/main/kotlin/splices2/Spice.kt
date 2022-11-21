package splices2

import java.awt.Color

abstract sealed class Spice(var nameOfsplice: String, levelOfsplice: String, spiceColor: SpiceColor): SpiceColor {
    var numberOfSplice: String
//    constructor(): this("salt"){
//        println("running secondary constructor")
//    }

    init {
        numberOfSplice = levelOfsplice

    }

    var heat : Int = 0
        get() = if (numberOfSplice == "high") 8 else if (numberOfSplice == "mild") 5 else if(numberOfSplice == "low") 2 else if (numberOfSplice == "not spicy") 0 else 0

    abstract fun prepareSpice()

    init {
        println("Name of splice: ${nameOfsplice}, level: ${numberOfSplice} with a heat: ${heat}")
    }

//    fun createSpiceList(){
//        val listSpice: List<Spice> = arrayListOf(this, Spice("palprica", "low"), Spice("curry", "mild"))
//        var listHeat: List<Spice> = listSpice.filter { it.heat >= 5 }
//        var listNoHeat: List<Spice> = listSpice.filter { it.heat <5 }
//        listHeat.forEach{
//            println("${it.nameOfsplice}")
//            println("end of heat list")
//        }
//        listNoHeat.forEach{
//            println("${it.nameOfsplice}")
//        }
//    }
}

class Curry(spiciness: String, spiceColor: SpiceColor = YellowSpiceColor) : Spice("curry", spiciness, spiceColor){



    override fun prepareSpice() {
        println("curry is being prepared!")
    }

    override var color: Color
        get() = YellowSpiceColor.color
        set(value) {}


}

interface Grinder{
    fun grind()
}

interface SpiceColor{
    var color: Color
}

object YellowSpiceColor: SpiceColor {
    override var color = Color.YELLOW
}

enum class Color(val rgb: Int) {
    RED(0xFF0000), GREEN(0x00FF00), BLUE(0x0000FF);
}


fun main() {
    var myCurry = Curry( "mild")

}