import React from 'react';
import { Skills } from './Skills';

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
        return (
            <div>
              <div className={'parallax'}>
                {
                    this.state.layers.map((layer, index) => {
                        return (
                            <div key={ index } className={`parallax__layer parallax__layer__${index}`}>
                              <img src={ layer } />
                            </div>
                        );
                    })
                }
                <div className={'parallax__cover'}>
                    <Skills />
                    <div className={'center-div'}>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}