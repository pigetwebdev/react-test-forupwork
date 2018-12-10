import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import './DemoLikeProduct.css';
import { moveNextPage } from '../../Actions/actionCreator';



//import { Test } from './DemoLikeProduct.styles';
const Handle = Slider.Handle;
const toolTips = ['hate it','not really','so-so','fine','like it','love it']


class DemoLikeProduct extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      valueLike : 0
    };
  }
  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={toolTips[value]}
        visible={true}
        placement="bottom"
        key={index}
      >
      <Handle value={value} {...restProps} />
      </Tooltip>  
    );
  };
  
  render () {
    return (
      <div className="DemoLikeProductWrapper">
       <button className="btn-close" onClick = {this.props.moveNextPage}>X</button>
        <div className='demo-product'>
          <div className = 'product-image'></div>
          {/* <img src={imgProduct} className="img-product" alt="" /> */}
          <div className = "div-like">
            <p className="text-like">How much you like this lookbook</p>
            <div className ='like-slider'>
              <Slider
                 defaultValue={this.state.valueLike}
                 min={0}
                 max={5}
                 step={1}
                handle={this.handle}
                trackStyle={{ backgroundColor: '#FFB284', height: 10 }}
                handleStyle={{
                  height: 28,
                  width: 28,
                  marginLeft: -14,
                  marginTop: -9,
                  backgroundColor: '#FFFBFF'
                }}
                railStyle={{backgroundColor: '#FFFBFF', height: 10 }}                
                />
            </div>
          </div>  
        </div>          
      </div>    
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveNextPage
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(DemoLikeProduct);
