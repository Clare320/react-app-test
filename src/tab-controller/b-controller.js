import React, { Component } from 'react'

export default class BController extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        };
    }
    
    render() {
        const { count } = this.state;
        return (
            <div>
              BController  
              <div onClick={() => {
                  this.setState(preState => ({
                      count: preState.count + 1
                  }));
              }}>
                  add
                  <span>总数<span>{count}</span></span>
              </div>
            </div>
        )
    }
}
