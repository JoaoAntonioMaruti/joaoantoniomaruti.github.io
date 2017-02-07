import React from 'react';
import { Projects } from './Projects';
import { Logo } from './Logo';


export class Content extends React.Component {
    constructor(props){
        super(props);
        this.projects = [{
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
                <h1>Hello</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis odio vitae velit consectetur tempor. Proin ornare dapibus tincidunt. Aliquam non ullamcorper libero. Vivamus tristique pellentesque arcu, eu aliquam ex. Nam velit odio, dictum id laoreet id, condimentum ac nibh. Integer pretium feugiat turpis, vel placerat arcu ultricies ac. Donec ac elit in mauris fermentum convallis. Maecenas magna eros, maximus ac rutrum eu, rhoncus sit amet dolor. Nunc tristique mollis imperdiet. In vel neque sed augue efficitur accumsan non sed metus. Sed ut arcu vitae odio pellentesque varius placerat vulputate lacus. Ut gravida non purus nec condimentum. Mauris tincidunt nunc ut nunc pulvinar tempus. Aliquam ac euismod lacus. Duis placerat nibh vitae odio congue, ac dignissim sapien faucibus. Sed metus mauris, fringilla vel diam et, interdum mollis elit.
                </p>
                <Projects projects={ this.projects } />
            </div>
        );
    }
}