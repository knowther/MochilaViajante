package splices

class splice(var nameOfsplice: String, levelOfsplice: String = "not spicy") {
    var numberOfSplice: String
    constructor(): this("salt"){
        println("running secondary constructor")
    }

    init {
        numberOfSplice = levelOfsplice

    }

    var heat : Int = 0
        get() = if (numberOfSplice == "high") 8 else if (numberOfSplice == "mild") 5 else if(numberOfSplice == "low") 2 else if (numberOfSplice == "not spicy") 0 else 0
    init {
        println("Name of splice: ${nameOfsplice}, level: ${numberOfSplice} with a heat: ${heat}")
    }

   open fun makeSalt() = splice("salt")

    fun createSpiceList(){
        val listSpice: List<splice> = arrayListOf(this, splice("palprica", "low"), splice("curry", "mild"))
        var listHeat: List<splice> = listSpice.filter { it.heat >= 5 }
        var listNoHeat: List<splice> = listSpice.filter { it.heat <5 }
        listHeat.forEach{
            println("${it.nameOfsplice}")
            println("end of heat list")
        }
        listNoHeat.forEach{
            println("${it.nameOfsplice}")
        }
    }
}