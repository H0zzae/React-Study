import React from 'react';
import './Layout.css';

function Layout() {
    let state = {
        input: '',
        todos: [
            {id: 1, message: '첫번째당'},
            {id: 2, message: '두번째당'},
            {id: 3, message: '세번째당'},
            {id: 4, message: '네번째당'}
        ]
    };
    const add = () => {
        this.state.append()
    };
    return (
        <div className="Layout">
            <header>
                <h1>날짜입니다</h1>
            </header>
            <div className="input-container">
                <input onChange={}/>
                <button onClick={add}>추가</button>
            </div>
        </div>
    );
}

export default Layout;
