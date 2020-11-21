// Отображение кнопок
import React from 'react';
import './Toolbar.css';

function Toolbar (props) {
    const {filters, selected, onSelectFilter} = props;
    return (
        <div className= 'list'>
        { filters.map( filter => {
            if (filter === selected.selected) {
                return <button onClick={(evt) => onSelectFilter(evt)} className ='selectBtn'>{filter}</button>
            }
            else {
                return <button onClick={(evt) => onSelectFilter(evt)}>{filter}</button>
            }
            })
        }
        </div>
    )
 }

 export default Toolbar;