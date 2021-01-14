import { act } from "react-dom/test-utils";
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

// const initialSatate = {
//     bookList: {
//         books: [],
//         loading: true,
//         error: null,
//     },
//     shoppingCart: {
//         cartItems: [
//             // {
//             //     id: 1,
//             //     name: 'Book 1',
//             //     count: 3, 
//             //     total: 150
//             // },
//             // {
//             //     id: 2,
//             //     name: 'Book 2',
//             //     count: 2, 
//             //     total: 700
//             // }
//         ],
//         orderTotal: 0
//     },
// } 

// const updateCartItems = (cartItems, item, idx) => {

//     if(item.count === 0) {
//         return [
//             ...cartItems.slice(0, idx),
//             ...cartItems.slice(idx + 1),
//         ]
//     }

//     if (idx === -1) {
//         return [
//             ...cartItems,
//             item
//         ]
//     };
//     return [
//         ...cartItems.slice(0, idx),
//         item,
//         ...cartItems.slice(idx + 1),
//     ];
// };

// const updateCartItem = (book, item = {}, quantity) => {
//     const {  id = book.id, count = 0,  title = book.title, total = 0 } = item;

//     return {
//         id,
//         title,
//         count: count + quantity,
//         total: total + quantity*book.price
//     }
// };

// const updateOrder = (state, bookId, quantity) => {
//     const { bookList: {books}, shoppingCart: {cartItems} } = state;
//     const book = books.find((({id})=> id === bookId))
//     const itemIndex = cartItems.findIndex(({id}) => id === bookId);
//     const item = cartItems[itemIndex];

//     const newItem = updateCartItem(book, item, quantity)
//     return {
//         orderTotal: 0,
//         cartItems: updateCartItems(cartItems, newItem, itemIndex)
//     }
// }

// const updateBookList = (state, action) => {
//     if (state === undefined) {
//         return {
//             books: [],
//             loading: true,
//             error: null,
//         }
//     }
//     switch (action.type){
//         case 'FETCH_BOOKS_REQUESTED':
//             return {
//                 books: [],
//                 loading: true,
//                 error: null
//             }
//         case 'FETCH_BOOKS_SUCCESS':
//             return {
//                 books: action.payload,
//                 loading: false,
//                 error: null
//             }
//         case 'FETCH_BOOKS_FAILURE':
//             return {
//                 books: [],
//                 loading: false,
//                 error: action.payload
//             }
//         default:
//             return state.bookList;
//     }
// }

// const updateShoppingCart = (state, action) => {
//     if (state === undefined) {
//         return {
//             cartItems: [],
//             orderTotal: 0
//         }
//     }
//     switch (action.type){
//         case 'BOOK_ADDED_TO_CART':
//             return updateOrder(state, action.payload, 1);
        
//         case 'BOOK_REMOVED_FROM_CART':
//             return updateOrder(state, action.payload, -1);

//         case 'ALL_BOOK_REMOVED_FROM_CART':
//             const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
//             return updateOrder(state, action.payload, -item.count);
//         default:
//             return state.shoppingCart;
//     }
// }

const reducer = (state, action) =>{
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
    // switch (action.type) {
    //     case 'FETCH_BOOKS_REQUESTED':
    //     case 'FETCH_BOOKS_SUCCESS':
    //     case 'FETCH_BOOKS_FAILURE':
    //         return {
    //             ...state,
    //             bookList: updateBookList(state, action)
    //         }
        
    //     case 'BOOK_ADDED_TO_CART':
    //     case 'BOOK_REMOVED_FROM_CART':
    //     case 'ALL_BOOK_REMOVED_FROM_CART':
    //         return {
    //             ...state,
    //             shoppingCart: updateShoppingCart(state, action)
    //         }
    //     // case 'FETCH_BOOKS_REQUESTED':
    //     //     return {
    //     //         ...state,
    //     //         books: [],
    //     //         loading: true,
    //     //         error: null
    //     //     }
    //     // case 'FETCH_BOOKS_SUCCESS':
    //     //     return {
    //     //         ...state,
    //     //         books: action.payload,
    //     //         loading: false,
    //     //         error: null
    //     //     }
    //     // case 'FETCH_BOOKS_FAILURE':
    //     //     return {
    //     //         ...state,
    //     //         books: [],
    //     //         loading: false,
    //     //         error: action.payload
    //     //     }
    //     // case 'BOOK_ADDED_TO_CART':
    //     //     return updateOrder(state, action.payload, 1);
        
    //     // case 'BOOK_REMOVED_FROM_CART':
    //     //     return updateOrder(state, action.payload, -1);

    //     // case 'ALL_BOOK_REMOVED_FROM_CART':
    //     //     const item = state.cartItems.find(({id}) => id === action.payload);
    //     //     return updateOrder(state, action.payload, -item.count);
    //     default:
    //         return state;
    // }
}

export default reducer; 