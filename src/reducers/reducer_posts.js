import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data.reduce((acc, curr) => {
                acc[curr.id] = { ...curr };
                return acc;
            }, {});
            break;
        case FETCH_POST:
            const post = action.payload.data;
            return { ...state, [post.id]: post }; // Use ES6 key interpollation to add the post
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
