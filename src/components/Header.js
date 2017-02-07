import React from 'react';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.menu = [{
            name:'Me',
            link:'#'
        }];
    }

    render(){
        return (
            <div  className={`app-header ${this.props.scroll > 150 ? 'app-header-active' : ''}`}>
                <ul>
                    <li>
                        <a href="#">Me</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}