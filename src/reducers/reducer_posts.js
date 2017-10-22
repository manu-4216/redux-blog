import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data);
            return action.payload.data.reduce((acc, curr) => {
                let { id, ...rest } = curr;
                acc[id] = rest;
            }, {});
            break;
        default:
            return state;
    }
}
