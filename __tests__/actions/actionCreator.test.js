import { moveNextPage } from '../../src/Actions/actionCreator';

describe('>>>A C T I O N --- Test MOVE_NEXT_PAGE',()=>{
    it('+++ actionCreator moveNextPage', () => {
        expect(moveNextPage()).toEqual({type:"MOVE_NEXT_PAGE",PageIndex:1})
    });
});