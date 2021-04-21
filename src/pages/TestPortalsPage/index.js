import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const modalElement = document.getElementById('root-modal');

export default class Modal extends Component {
    constructor(props) {
        super(props)
    
       this.el = document.createElement('div');
    }

    componentDidMount() {
        modalElement.appendChild(this.el);
    }

    componentWillUnmount() {
        modalElement.removeChild(this.el);
    }
    
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}