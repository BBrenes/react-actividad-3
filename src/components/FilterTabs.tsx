import React, { useState, useContext } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import FilterTab from './FilterTab'
import Grid from '@material-ui/core/Grid'
import ThemeContext from './ThemeContext';

interface Props {
    changeFilter: (category:string) => void;
}

interface Category {
    name: string;
    selected: boolean;
    id: number;
}

const FilterTabs:React.FC<Props> = ({changeFilter}) => {

    const theme = useContext(ThemeContext)

    const [categories, setCategories] = useState<Category[]>([
        {name: 'All', selected: true, id: 0},
        {name: 'Travel', selected: false, id: 1},
        {name: 'Lifestyle', selected: false, id: 2},
        {name: 'Business', selected: false, id: 3},
        {name: 'Food', selected: false, id: 4},
        {name: 'Work', selected: false, id: 5},
    ])
    

    const selectTab = (id: number):void => {
        const newCategories = categories.map((category:Category):Category => {
            if(category.id === id){
                if (category.selected === false){
                    category.selected = true
                    changeFilter(category.name)
                    return category
                }
                return category
            }
            category.selected = false
            return category
        })
        setCategories(newCategories)
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{marginBottom: '20px'}}>
            <ButtonGroup style={theme.filterTabs}>
                {categories.map(category => (
                    <FilterTab theme={theme} category={category} key={category.id} action={selectTab}  />
                ))}
            </ButtonGroup>
        </Grid>
       
    )
}

export default FilterTabs;