import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data.reduce((acc, curr) => {
                acc[curr.id] = { ...curr };
                return acc;
            }, {});
            break;
        default:
            return state;
    }
}
