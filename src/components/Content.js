import React from 'react';
import { Projects } from './Projects';
import { Logo } from './Logo';
import { Header } from './Header';


export class Content extends React.Component {
    constructor(props){
        super(props);
        this.projects = [
            {
                name:'Portou',
                link:'#',
                image:'./assets/portou.jpg',
                desc:''
            },
            {
                name:'Mforce',
                link:'#',
                image:'./assets/mforce.png',
                desc:''
            }
        ];
    }
    render(){
        return (
            <div className={'content'} style={ this.props.styles }>
                <Logo />
                <Header />
                <h1>João Antonio Maruti Milagres</h1>
                <p>
                    Graduated in Systems Analysis at Unipar University, Brazilian, 22 years old, passionate about technology and innovation
                </p>
                {
                    // <Projects projects={ this.projects } />
                }
            </div>
        );
    }
}