import React from 'react';

export class Skills extends React.Component {
    constructor(props){
        super(props);
        this.skills = [
            {
                value:5,
                name:'Stylus'
            },
            {
                value:10,
                name:'JavaScript'
            },
            {
                value:4,
                name:'TDD'
            },
            {
                value:8,
                name:'SCSS'
            },
            {
                value:4,
                name:'Regex'
            },
            {
                value:8,
                name:'Ionic'
            },
            {
                value:5,
                name:'UI/UX'
            },
            {
                value:9,
                name:'AngularJS'
            },
            {
                value:7,
                name:'React'
            }
        ];
    }
    render(){
        return (
            <div className={'skills-diagram'}>
                <dl>
                    {
                        this.skills.map((skill, index) => {
                          return (
                            <div key={index}>
                              <dt className={`skill-${skill.value}`}>
                                { skill.name }
                              </dt>
                              <dd>{ skill.value }</dd>
                            </div>
                          );
                        })
                    }
                </dl>
            </div>
        );
    }
}