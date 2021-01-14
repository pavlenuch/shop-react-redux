import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='cover' />
            </div>
            <div className='book-details'>
                <span>{title}</span>
                <span>{author}</span>
                <span>{price}</span>
                <button className='btn btn-info add-to-cart'
                    onClick={onAddedToCart}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;