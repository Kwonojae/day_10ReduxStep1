//액션 생성
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//액션 내보내기 
export const changeColor = (color) => ({type:CHANGE_COLOR, color})
//dispatch({type:액션명, 키: 값}) => change_color('red)

//리듀서 
const initalState = {color : 'skyblue'}
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case CHANGE_COLOR : 
            return {
                ...state,
                color : action.color
            }
        default : 
            return state
    }
}

export default reducer;