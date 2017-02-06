import React from 'react';
import { Header } from './Header';
import { Parallax } from './Parallax';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scroll:0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll (event) {
      this.setState({scroll : event.target.scrollTop});
    }
    
    render(){
        return (
            <div onScroll={this.handleScroll}>
              <Header scroll={ this.state.scroll } />
              <div className={'about'}>Hello, I'm João 
                <span className={'small'}>
                  Front-end enginer
                </span>
              </div>
              <Parallax />
            </div>
        );
    }
} 