import { Component } from "react";
import './index.css'

class ShowOrHide extends Component {
    state = {first:true,last:true}

    lasttName = () => {
        this.setState((perv)=>({last:!perv.last}))
    }
    firstName = () => {
        this.setState((perv)=>({first:!perv.first}))
    }

    render() {
        const {first,last} = this.state

        return(
        <div className='bg'>
            <h1 className="head">Show/Hide</h1>
            <div className="btn-cart">
            <div className="cart">
                <button className="btn" onClick={this.firstName}>Show/Hide Firstname</button>
                {first && (
                    <div className="name-bg">
                    <p>Joe</p>
                    </div>
                )}

            </div>
            <div className="cart">
                <button className="btn" onClick={this.lasttName}>Show/Hide Lastname</button>
                {last && (
                    <div className="name-bg">
                    <p>Jones</p>
                </div>
                )}
            </div>
            </div>
        </div>)
    }
}

export default ShowOrHide