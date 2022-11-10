fun main() {
   print(whatShouldIdoToday())
}

fun whatShouldIdoToday(mood: String? = readLine(), weather: String = "sunny", temperature: Int = 24): String{
    when{
        isHappy(mood) && isSunny(weather) -> return "go for a walk"
        isSad(mood) && isRainy(weather) && isCold(temperature) -> return "stay in bed"
        isHot(temperature) -> return "go swimming"
        else -> return "Stay home and read."
    }


}

fun isHappy(mood: String?) = mood == "happy"
fun isSad(mood: String?) = mood == "sad"
fun isCold(temperature: Int) = temperature == 0
fun isRainy(weather: String) = weather == "rainy"
fun isSunny(weather: String) = weather == "sunny"
fun isHot(temperature: Int) = temperature > 35