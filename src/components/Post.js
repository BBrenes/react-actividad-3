import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Grid from '@material-ui/core/Grid'


export default function FilterTab({post, ...other}) {

    const theme = useContext(ThemeContext)

    return (
        <Grid item xs={12} sm={6} style={{height: '400px'}}>
            {post.title}
            <img src={post.imageURL} alt={post.title}/>
        </Grid>
    )
}