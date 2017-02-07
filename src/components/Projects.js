import React from 'react';
var Slider = require('react-slick');

export class Projects extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
            <div style={{padding:20}}>
              <Slider {...settings}>
                {
                    this.props.projects.map((project, index) => {
                        return (
                            <div className={'project'} key={index} >
                                <img src={ project.image } />
                            </div>
                        );
                    })
                }
              </Slider>
            </div>
        );
    }
}