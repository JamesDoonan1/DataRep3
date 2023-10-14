// Import the BookItem component from a local file named "bookItems".
import BookItem from "./bookItems";

/ This is a functional component named Books that takes a single prop called 'myBooks'.
function Books(props) {

    // Use the `map` function to iterate over each book in the 'myBooks' array and create a 'BookItem' component for each book.
    return props.myBooks.map(
        (book)=>{
            // Render the 'BookItem' component with the 'myBook' prop set to the current book and a unique 'key' based on the book's 'isbn' value.
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );
}
// Export the Books component to be used elsewhere in your application.
export default Books;
