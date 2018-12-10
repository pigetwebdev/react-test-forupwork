import { MOVE_NEXT_PAGE,MOVE_LAST_PAGE} from '../Actions/actionsTypes'

const movePageReducer = (state = 0, action) => {
    switch (action.type){
        case MOVE_NEXT_PAGE:
        return action.PageIndex;
        case MOVE_LAST_PAGE:
        return action.PageIndex;

        default:
        return state
    }
}

export default movePageReducer