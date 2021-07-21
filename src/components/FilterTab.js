import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Button from '@material-ui/core/Button'


export default function FilterTab({category, action, ...other}) {

    const theme = useContext(ThemeContext)

    return (
        <Button 
            {...other}
            onClick={() => action(category.id)}
            style={category.selected ? theme.filterTabSelected : theme.filterTabNoSelected}
        >{category.name}
        </Button>
    )
}