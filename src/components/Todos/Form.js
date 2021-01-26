import React from 'react';
import './Form.css'

const Form = ({input, insert,changeInput}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        insert(input)
        changeInput('')//데이터 추가후 공백처리 
    }
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    value={input}
                    onChange={e => changeInput(e.target.value)}               
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default Form;