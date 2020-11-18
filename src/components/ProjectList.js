// отображение картинок
import React from 'react'
import './ProjectList.css'

function ProjectList(props) {
    const {projects,selected} = props;
    const arr = projects.filter((project) => {
        if (selected.selected === 'All' || selected.selected === ''){
            return project
        } else return project.category === selected.selected
    })
    return (
            <div className= 'content'>
                { arr.map( (project) => {
                    return <div>
                        <img src = {project.img} alt={selected.selected}/>
                    </div>
                })
                }
            </div>
        );

};

export default ProjectList;
