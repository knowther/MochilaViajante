package book

fun main() {
    var myeBook = eBook()
    println(myeBook.wordCount)
    myeBook.readPage()
    println(myeBook.wordCount)
}