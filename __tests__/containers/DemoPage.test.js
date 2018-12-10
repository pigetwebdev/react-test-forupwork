import React from 'react';
import DemoPage from '../../src/Container/DemoPage';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { moveNextPage, moveLastPage } from '../../src/Actions/actionCreator';
import configureStore from 'redux-mock-store'
const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };
};

describe('>>>Demopage --- Snapshot',()=>{
  it('+++capturing Snapshot of DemoPage', () => {
    const store = storeFake({});  
      const renderedValue =  renderer.create(
        <Provider store={store}>
        <DemoPage />
        </Provider>).toJSON()
      expect(renderedValue).toMatchSnapshot();
  });

});
