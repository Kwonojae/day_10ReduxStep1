//액션 생성 
const INCREMENT = 'counter/INCREMENT'; //이름이 다른 곳과 같을수 있으므로 구별하기 위한 파일 경로 까지 넣어줌 
const DECREMENT = 'counter/DECREMENT'; //이름이 같을수 있으므로 
const RESET = 'counter/RESET';

//액션 값 내보는부분 
export const increment = () => ({type:INCREMENT});
export const decrement = () => ({type:DECREMENT});
export const reset = () => ({type:RESET});
//dispatch({type:액션명}) -> dispatch( increment() )
//dispatch({type:액션명, 값 }) -> dispatch ( decrement(값) )

//리듀서 - 순수 함수.
const initalState = {
    count : 0
}
//state : initalState 초기값 
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                ...state,
                count : state.count + 1
            }
        case DECREMENT : 
            return {
                ...state,
                count : state.count - 1
            }
        case RESET : 
            return {
                ...state,
                count : 0
            }
        default : 
            return state
    }
}

export default reducer;//리듀서 함수가 기본으로 나간다.