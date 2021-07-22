import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

export default function Post({theme, post, ...other}) {

    return (
        <Grid container item xs={12} md={6} direction="column" justifyContent="flex-end" alignItems="flex-start"
            style={{ 
                height: '350px',
                backgroundImage: `url(${post.imageURL}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                '&:hover': {
                    opacity: '0.5',
                    border: "solid 1px #cccccc",
                },
            }}
        >
            <Grid item >
                <Typography variant="h4" style={theme.postTitle} >{post.title}</Typography>
            </Grid>
            <Grid item >
                <Typography variant="h6" style={theme.postComments} >
                3 Comments <QuestionAnswerOutlinedIcon style={theme.postIconComments}/>
                </Typography>
            </Grid>
            <Grid item >
                <Typography variant="h6" style={theme.postDescription} >{post.description}</Typography>
            </Grid>
            <Grid item >
                <Typography variant="h6" style={theme.postCategory} >{post.category}</Typography>
            </Grid>
            
        </Grid>
    )
}