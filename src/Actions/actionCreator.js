import { MOVE_NEXT_PAGE } from './actionsTypes'
import { MOVE_LAST_PAGE } from './actionsTypes'

let CurPageIndex = 0; //First Page
export const moveNextPage = () => ({
    type: MOVE_NEXT_PAGE,
    PageIndex: CurPageIndex < 2? ++CurPageIndex: 2
})

export const moveLastPage = () => ({
    type: MOVE_LAST_PAGE,
    PageIndex: 2
})
