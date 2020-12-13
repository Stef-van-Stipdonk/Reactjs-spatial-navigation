import React, { Component } from "react";

class FocusItem extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export {FocusItem as default};