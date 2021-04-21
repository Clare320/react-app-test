import React, { Component } from 'react'

export default class TestSetStatePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }
    }
    
    addCount = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }



    render() {
        const { count } = this.state
        return (
            <div>
                {count}
                <div onClick={this.addCount}>add</div>
            </div>
        )
    }
}
