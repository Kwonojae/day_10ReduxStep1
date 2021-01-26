//액션 생성
const INSERT = 'todos/INSERT'; //데이터 추가 
const REMOVE = 'todos/REMOVE'; //데이터 삭제 
const TOGGLE = 'todos/TOGGLE'; //클래스 붙이고 떼기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //폼 텍스트 입력 부분.


//액션 내보내기 
let no = 1;
export const insert = ( text ) => ({type:INSERT, list:{id:no++, text:text, done:false} });
export const remove = (id) => ({type:REMOVE, id});
export const toggle = (id) => ({type:TOGGLE, id});
export const changeInput = (text) => ({type:CHANGE_INPUT, text}); //데이터값 들어가는 부분

//리듀서 
const initState = {
    input : '',
    todos:[],
    //todos [{id:1, text:'할일1'}, {id:2, text:'할일2'}] = insert
}
const reducer = (state = initState, action) => {    //action === type 
    switch(action.type) {
        case INSERT : //데이터 추가
            return {
                ...state,
                todos : state.todos.concat(action.list)
            }
        case REMOVE : //데이터 삭제
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE : //특정 값을 바꾸는것 
            return {
                ...state,
                todos : state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done:!todo.done} : todo)
            }
        case CHANGE_INPUT : 
            return {
                ...state,
                input : action.text
            }
        default : 
            return state
    }
}
export default reducer;