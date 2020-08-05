import React from "react";
import Moment from "react-moment";

class Cal extends React.Component{
    state = {
        dischargeDay: "?",
    }
    calDday(){
        const discharday = <Moment format="YYYY-MM-DD" add={{month:18}}>{this.props.startDay}</Moment>
        this.setState((state, props)=>{
            return {dischargeDay : discharday}})
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.calDday()}}>확인하기</button>
                <br/>
                전역일은 {this.state.dischargeDay} 입니다.
            </div>
        );
    }
}
export default React.memo(Cal);