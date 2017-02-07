import React from 'react';
import { Content } from './Content';

export class Parallax extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state.layers = [
            './assets/l1.png',
            './assets/l2.png',
            './assets/l3.png',
            './assets/l4.png',
            './assets/l5.png',
            './assets/l6.png',
            './assets/l7.png'
        ];
    }
    
    render(){
        let contentTop = {
            'marginTop': (-(this.props.filter / 2))
        };
        
        return (
            <div>
              <div className={`parallax ${this.props.filter > 150 ? 'night-parallax' : ''}`}>
                {
                    this.state.layers.map((layer, index) => {
                        return (
                            <div key={ index } className={`parallax__layer parallax__layer__${index}`}>
                              <img src={ layer } className={ this.props.filter > 150 ? 'night' : ''}/>
                            </div>
                        );
                    })
                }
                <div className={`parallax__cover ${this.props.filter > 150 ? 'parallax__cover__night' : ''}`}>
                </div>
              </div>
              <Content styles={ contentTop } />
            </div>
        );
    }
}