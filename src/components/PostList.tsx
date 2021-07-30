import React from 'react'
import Post from './Post'
import Grid from '@material-ui/core/Grid'
import { State, PostI } from '../models/Post'

interface Props {
    filter: string;
    postList: State;
  }

const PostList:React.FC<Props> = ({ filter, postList }) => {

    const postListFiltered = postList.filter((post:PostI):boolean => {
        if(filter === 'All'){
            return true
        }
        return post.category === filter
    })

    return (
        <Grid container justifyContent="center" alignItems="center" >
            {postListFiltered.map((post:PostI) => (
                <Post post={post} key={post.id} />
            ))}
        </Grid>
       
    )
}

export default PostList;