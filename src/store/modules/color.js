//액션 생성
const RED = 'color/RED';
const GREEN = 'color/GREEN'
const PINK = 'color/PINK'
const SKYBLUE = 'color/SKYBLUE'
const YELLOW = 'color/YELLOW'

//액션 내보내기
export const red = () => ({type : RED});
export const green = () => ({type: GREEN});
export const pink = () => ({type : PINK});
export const skyblue = () => ({type: SKYBLUE});
export const yellow = () => ({type:YELLOW});

//dispatch({type:액션명}) => dispatch(red() )
//dispatch({type:액션명,값}) => dispatch(red(값) )

//reducer
const initalState = {
    color : 'orange'
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case RED : 
            return {
                ...state,
                color : 'red'
            }
        case GREEN : 
            return {
                ...state,
                color : 'green'
            }
        case PINK : 
            return {
                ...state,
                color : 'pink'
            }
        case SKYBLUE : 
            return {
                ...state,
                color : 'skyblue'
            }
        case YELLOW : 
            return {
                ...state,
                color : 'yellow'
            }
        default : 
            return state
    }
}

export default reducer;