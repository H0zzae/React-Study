import React, {Component} from "react";
import Cal from './Cal';


class getEDay extends React.Component{
    state = {
        startDay: 100,
    }
    getStartDay(){
        const day = document.getElementById("enlistmentDay").value;
        this.setState((state, props)=> {
            return {startDay : day}
        });
    }
    render() {
        return (
            <div>
                <input type="date" id="enlistmentDay" onChange={()=>this.getStartDay()}/>
                {/*<button onClick={()=>{console.log(this.state.startDay)}}>확인</button>*/}
                <Cal startDay = {this.state.startDay}/>
            </div>

    )
    }
}
export default React.memo(getEDay);