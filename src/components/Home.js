import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Rodou');
    }
    render(){
        return (
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
        );
    }
} 