package splices2

data class SpiceContainer(val label: String){}

fun main() {
    var container1 = SpiceContainer("Curry")
    var container2 = SpiceContainer("Palprica")
    println(container1)
    println(container2)
}