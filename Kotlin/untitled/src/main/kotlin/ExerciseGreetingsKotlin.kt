fun main(args: Array<String>) {
    var message =  "${if (args[0].toInt() <12) "Good Morning" else "Good Night"}, Kotlin"
    println(message)
}