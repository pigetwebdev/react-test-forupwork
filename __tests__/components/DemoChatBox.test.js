import React from 'react';
import DemoChatBox from '../../src/Component/DemoChatBox';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

test('DemoChatBox_____------______', () => {

    const store = storeFake({});  
    
    const component = renderer.create(
      <Provider store={store}>
      <DemoChatBox />
      </Provider>,
    );
        
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // // manually trigger the callback
    //  tree.props.moveLastPage();
    // // // re-rendering
    //  tree = component.toJSON();
    //  expect(tree).toMatchSnapshot();
  
    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });