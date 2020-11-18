import { ReactComponent } from "*.svg";

// список фильтров (а также активный фильтр) а также список проектов
import react from 'react';
class Portfolio {
    constructor (filters, selected, projects) {
        this.filters = filters;
        this.selected = selected;
        this.projects = projects;
        this.onSelectFilter = this.onSelectFilter.bind(this)
    }
    onSelectFilter (filter) {
        return console.log(filter)
    }
}

export default Portfolio;