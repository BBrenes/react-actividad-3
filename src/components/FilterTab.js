import React from 'react'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'


export default function FilterTab({theme, category, action, ...other}) {

    return (
        <Button 
            {...other}
            onClick={() => action(category.id)}
            style={category.selected ? theme.filterTabSelected : theme.filterTabNoSelected}
        >{category.name}
        </Button>
    )
}