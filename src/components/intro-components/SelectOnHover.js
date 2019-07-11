import React, { Component } from 'react'

export default class SelectOnHover extends Component {
    state={
        active:'KDO JSME',
    }

    setActive = (event) =>{
        
        const value = event.target.innerText;
        this.setState({
            //this can be extended in future for more elements
            active:value
        })
    }

    render() {
        
        return (
            <React.Fragment>
                {this.props.render({
                    active:this.state.active,
                    setActive:this.setActive
                })}
            </React.Fragment>
        )
    }
}
