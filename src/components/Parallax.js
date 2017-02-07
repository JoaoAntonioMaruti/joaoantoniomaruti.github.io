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
        let grayFilter = {
            '-webkit-filter': `grayscale(${this.props.filter / 2}%)`,
            filter: `grayscale(${this.props.filter / 2}%)`
        }
        
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
                    <h1>Skills</h1>
                  {
                    //<Skills />
                    // <div className={'center-div'}></div>
                  }
                </div>
              </div>
              <div className={`content`} style={ contentTop }>
                <h1>Hello</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis odio vitae velit consectetur tempor. Proin ornare dapibus tincidunt. Aliquam non ullamcorper libero. Vivamus tristique pellentesque arcu, eu aliquam ex. Nam velit odio, dictum id laoreet id, condimentum ac nibh. Integer pretium feugiat turpis, vel placerat arcu ultricies ac. Donec ac elit in mauris fermentum convallis. Maecenas magna eros, maximus ac rutrum eu, rhoncus sit amet dolor. Nunc tristique mollis imperdiet. In vel neque sed augue efficitur accumsan non sed metus. Sed ut arcu vitae odio pellentesque varius placerat vulputate lacus. Ut gravida non purus nec condimentum. Mauris tincidunt nunc ut nunc pulvinar tempus. Aliquam ac euismod lacus. Duis placerat nibh vitae odio congue, ac dignissim sapien faucibus. Sed metus mauris, fringilla vel diam et, interdum mollis elit.
                </p>
              </div>
            </div>
        );
    }
}