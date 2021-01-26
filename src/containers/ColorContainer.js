import React from 'react';
import { connect } from 'react-redux';
import { Color } from '../components';
import { green, pink, red, skyblue, yellow } from '../store/modules/color';

const ColorContainer = ({color, red, green, pink, skyblue, yellow}) => {
    return (
        <div>
            <Color
                color = {color}
                red={red}
                green={green}
                pink={pink}
                skyblue={skyblue}
                yellow={yellow}
            />
        </div>
    );
};
//읽기 
const mapStateToProps=(state) => ({
    //state.파일명.color
    color : state.color.color
})
//쓰기
const mapDispatchToProps = (dispatch) => ({
    red : () => dispatch(red() ),
    green : () => dispatch(green() ),
    pink : () => dispatch(pink() ),
    skyblue : () => dispatch(skyblue() ),
    yellow : () => dispatch(yellow() ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ColorContainer);