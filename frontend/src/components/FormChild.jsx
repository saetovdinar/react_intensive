import React from 'react';

export default class FormChild extends React.Component {
   
    render() {
        console.log(this.props.onClickHandler);
        return (
            <React.Fragment>
                
                <button   type="reset">{this.props.childProps.name}</button>
            </React.Fragment>
        );
    }
}