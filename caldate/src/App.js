import React, {Component} from "react";
import Clock from 'react-live-clock';
import GetEDay from './GetEnlistmentDay';

class App extends React.Component {
    render() {
        return (
            <div>
                <Clock format = {'현재 시각 YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'}/>
                <GetEDay/>
            </div>

        );
    }
}

export default App;
