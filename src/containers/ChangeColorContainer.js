import React from 'react';
import { connect } from 'react-redux';
import {ChangeColor} from '../components';
import { changeColor } from '../store/modules/changecolor';


const ChangeColorContainer = ({color, changeColor}) => {
    return (
        <div>
            <ChangeColor
                color={color}
                changeColor={changeColor}
            />
        </div>
    );
};

//상태값 읽기
const mapStateToProps = (state) => ({
    //state.파일명.color
    color : state.changecolor.color
})
//액션 쓰기 
const mapDispatchToProps = (dispatch) => ({
    changeColor : (color) => dispatch( changeColor(color) )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ChangeColorContainer);