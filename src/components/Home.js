import React from 'react';
import { Header } from './Header';

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
              <div className={'parallax'}>
                <div className={'parallax__layer parallax__layer__0'}>
                  <img src={'./assets/l1.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__1'}>
                  <img src={'./assets/l2.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__2'}>
                  <img src={'./assets/l3.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__3'}>
                  <img src={'./assets/l4.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__4'}>
                  <img src={'./assets/l5.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__5'}>
                  <img src={'./assets/l6.png'} />
                </div>
                <div className={'parallax__layer parallax__layer__6'}>
                  <img src={'./assets/l7.png'} />
                </div>
                <div className={'parallax__cover'}></div>
              </div>
            </div>
        );
    }
} 