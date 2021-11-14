import React , {Component} from "react";
import CounterButton from "./CounterButton";

class Header extends Component{
    shouldComponentUpdate(nextProps, nextState){   //this is to make sure that header renders only once
        return false;
    }
    render(){
        return (
            <div>
                <h1 className='f1'>RoboFriends</h1> 
                <CounterButton color="red"/>
            </div>
        )
    }
}

export default Header;