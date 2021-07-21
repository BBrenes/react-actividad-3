import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import FilterTab from './FilterTab'
import Grid from '@material-ui/core/Grid'

export default function FilterTabs({changeFilter}) {

    const theme = useContext(ThemeContext)
    const [categories, setCategories] = useState([
        {name: 'All', selected: true, id: 0},
        {name: 'Travel', selected: false, id: 1},
        {name: 'Lifestyle', selected: false, id: 2},
        {name: 'Business', selected: false, id: 3},
        {name: 'Food', selected: false, id: 4},
        {name: 'Work', selected: false, id: 5},
    ])
    

    const selectTab = (id) => {
        const newCategories = categories.map(category => {
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
        <Grid container justifyContent="center" alignItems="center" >
            <ButtonGroup style={theme.FilterTabs}>
                {categories.map(category => (
                    <FilterTab category={category} key={category.id} action={selectTab}  />
                ))}
            </ButtonGroup>
        </Grid>
       
    )
}