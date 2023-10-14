import Card from 'react-bootstrap/Card';
// This is a functional component named BookItem that takes a single prop called 'myBook'.
function BookItem(props) {
    return (
        <div>
            {/* Create a Card component from react-bootstrap to display book information. */}
            <Card>
                {/* Display the book title in the Card Header. */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <img src={props.myBook.thumbnailUrl}></img> 
                        <footer className="blockquote-footer">
                        props.myBook.authors 
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            {/* This bookItem is a grandchild of read }
            <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    )
}

export default { BookItem };
