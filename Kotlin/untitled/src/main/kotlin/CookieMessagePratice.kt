import java.util.Random

fun main() {
    repeat(10){
        var fortune = getFortuneCookie2(getBirthday())
        if (fortune.equals("Take it easy and enjoy life!")){
          return print("Your fortune is: ${fortune}, the loop finally end.\n");
        }else{
            print("Your fortune is: ${fortune}\n");
        }
    }

}
fun getFortuneCookie2(birthday : Int): String{
    var listFortunes = listOf<String>("You will have a great day!",
        "Things will go well for you today.",
        "Enjoy a wonderful day of success.",
        "Be humble and all will turn out well.",
        "Today is a good day for exercising restraint.",
        "Take it easy and enjoy life!",
        "Treasure your friends because they are your greatest fortune.")
        when(birthday){
            in 28..31 -> return listFortunes.get(5)
            in 1..7 -> return listFortunes.get(6)
            else -> return listFortunes.get(birthday.div(listFortunes.size))
        }
    return ""
}

fun getBirthday() : Int{
    print("Enter your birthday:")

    return readLine()?.toIntOrNull() ?:1
}