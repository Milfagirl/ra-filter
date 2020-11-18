// Отображение кнопок
import React from 'react';
import './Toolbar.css';

function Toolbar (props) {
    const {filters, selected, onSelectFilter} = props;
    return (
        <div className= 'list'>
        { filters.map( filter => {
            if (filter === selected.selected) {
                return <button onClick={onSelectFilter} className ='selectBtn'>{filter}</button>
            }
            else {
                return <button onClick={onSelectFilter}>{filter}</button>
            }
            })
        }
        </div>
    )
 }

 export default Toolbar;