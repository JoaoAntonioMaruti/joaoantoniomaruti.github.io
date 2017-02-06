import React from 'react';

export class Skills extends React.Component {
    contructor(props){
        super(props);
    }
    render(){
        return (
            <dl className={'skills-diagram'}>
              <dt className={'skill-5'}>Stylus</dt>
              <dd>5</dd>
              <dt className={'skill-1'}>JavaScript</dt>
              <dd>10</dd>
              <dt className={'skill-6'}>TDD</dt>
              <dd>3</dd>
              <dt class="skill-8">SCSS</dt>
              <dd>8</dd>
              <dt className={'skill-4'}>Regex</dt>
              <dd>4</dd>
              <dt className={'skill-8'}>Ionic</dt>
              <dd>6</dd>
              <dt className={'skill-5'}>UI/UX</dt>
              <dd>5</dd>
              <dt className={'skill-9'}>AngularJS</dt>
              <dd>9</dd>
              <dt className={'skill-7'}>React</dt>
              <dd>7</dd>
            </dl>
        )
    }
}