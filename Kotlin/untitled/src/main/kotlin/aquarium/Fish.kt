package aquarium

class Fish(val friendly: Boolean = true, volumeNeeded: Int ) {
    val size: Int

    constructor(): this(true, 9){
        println("running secondary constructor")
    }

    init {
        if(friendly){
            size = volumeNeeded
        }else{
            size = volumeNeeded *2
        }
    }

    init {
        println("constructed fish of size $volumeNeeded final size ${this.size}")
    }

    fun printFish(){
        val fish = Fish(true, 20)
        this
        println("Is the fish friendly? ${fish.friendly}. It needs volume ${fish.size}")
    }
}