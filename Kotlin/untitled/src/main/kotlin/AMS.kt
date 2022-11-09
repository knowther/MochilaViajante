import java.util.Calendar

fun main(args: Array<String>){

    fun dayOfWeek(){

        println("What day is today?")
        when(Calendar.getInstance().get(Calendar.DAY_OF_WEEK)){
            1 -> print("Today is: Sunday" )
            2 -> print("Today is: Monday" )
            3 -> print("Today is: Tuesday")
            4 -> print("Today is: Wednesday")
            5 -> print("Today is: Thursday")
            6 -> print("Today is Saturday")
        }

    }

    dayOfWeek()
    }