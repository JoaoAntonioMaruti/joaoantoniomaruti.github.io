import React from 'react';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.menu = [{
            name:'Me',
            link:'#'
        }, {
            name:'About',
            link:'#'
        }, {
            name:'Projects',
            link:'#'
        }, {
            name:'Contact',
            link:'#'
        }];
    }

    render(){
        return (
            <div  className={`app-header ${this.props.scroll > 150 ? 'app-header-active' : ''}`}>
                <ul>
                    {
                        this.menu.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}