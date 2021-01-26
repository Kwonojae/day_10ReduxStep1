import React from 'react';
import { connect } from 'react-redux';
import { Counter } from '../components/Counter';
import { decrement, increment, reset } from '../store/modules/counter';

const CounterContainer = ({color,cnt, increment, decrement,reset} ) => {
    //화면에 보이는 실제ui부분
    return (
        <div>
            <Counter
                cnt ={cnt}
                increment = {increment}
                decrement = {decrement}
                reset = {reset}
                color={color}
            />
        </div>
    );
};

//읽기
const mapStateToProps = (state) => ({
    //state.파일명.초기값
    cnt : state.counter.count,
    color: state.color.color
})
//쓰기 액션값 
const mapDispatchToProps = (dispatch)=> ({
    increment : () => dispatch(increment() ), //dispatch({type:INCREMENT})
    decrement : () => dispatch(decrement() ), //store로 연결되 있고 함수로 만듦 
    reset : () => dispatch( reset() )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CounterContainer); 