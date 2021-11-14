import React , {Component} from "react";

class CounterButton extends Component{

    constructor() {
        super();
        this.state= {
            count:0
        }
    }

    shouldComponentUpdate(nextProps, nextState){   //this is to make sure that header renders only once
        if(this.state.count!== nextState.count){
            return true
        }
        return false

    }

    updateCount=()=>{
        this.setState(state => {
            console.log('count +1')
            return {count: state.count+1}
        })
    }
    render(){
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;