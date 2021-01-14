import React, { Component } from 'react';
import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book}  onAddedToCart={()=>onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
        // const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
        // booksRequested();
        // bookstoreService.getBooks()
        // .then((data) => booksLoaded(data))
        // .catch((err)=>booksError(err))
        // // this.props.booksLoaded(data)
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />
        }
        if (error ) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error };
};

// const mapDispatchToProps = (dispatch) => {
//     // return {
//     //     booksLoaded: (newBooks) => {
//     //         dispatch(booksLoaded(newBooks))
//     //     }
//     // }
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// }
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id)=> dispatch(bookAddedToCart(id))
    }
    // booksLoaded,
    // booksRequested,
    // booksError
}
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));