package book

open class Book {
    var title: String = ""
    var author: String = ""
    var currentPage: Int = 0

   open fun readPage(){
        currentPage += 1
    }

}

class eBook(var format: String = "text"): Book(){
    var wordCount: Int = 0
    override fun readPage() {
        wordCount += 250
    }
}