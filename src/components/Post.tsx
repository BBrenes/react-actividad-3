import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { deletePost } from '../redux/post/postActions';
import PostModal from './PostModal';
import { PostI } from '../models/Post'
import ThemeContext from './ThemeContext';

interface Props {
    post: PostI;
  }

const Post:React.FC<Props> = ({ post, ...other}) => {

    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()

    const useIconStyles = makeStyles({
        postContainer: {
            height: '350px',
            backgroundImage: `url(${post.imageURL})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            paddingLeft: '2vw',
            paddingRight: '2vw',
            '&:hover': {
                opacity: '0.8',
            },
            '&:hover $postIcon': {
                color: 'white',
            },
            '&:hover $bar': {
                width: '90px',
            }
            ,
            '&:hover $icons': {
                visibility: 'visible',
            }
        },
        postIcon: {
            marginLeft: '10px',
            color: 'transparent',
            fontSize: '20px',
            transition: 'color 1s',
        },
        icons: {
            marginLeft: '10px',
            visibility: 'hidden',
            fontSize: '20px',
            '&:hover': {
                opacity: '0.8',
                cursor: 'pointer'
            },
        },
        icon: {
            color: 'white',
        },
        bar: {
            marginBottom: '10px',
            width: '0px',
            height: '8px',
            background: 'white',
            transition: 'width 1s',
        }
    })
    
    const classes = useIconStyles()

    return (
        <Grid container item xs={12} md={6} direction="column" justifyContent="flex-end" alignItems="flex-start"
            className={classes.postContainer}
        >
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                <Grid item >
                    <Typography variant="h4" style={theme.postTitle as Object} >{post.title}</Typography>
                </Grid>
                <Grid item >
                    <div className={classes.bar}></div>
                </Grid>
                <Grid item >
                    <Typography variant="h6" style={theme.postComments} >
                    {post.comments.length} Comments <QuestionAnswerOutlinedIcon style={theme.postIconComments}/>
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="h6" style={theme.postDescription} >{post.description}</Typography>
                </Grid>
            </Link>
            
            <Grid container item direction="row" justifyContent="flex-end" alignItems="center">
                <Grid item className={classes.icons} >
                    <PostModal postInfo={post} modalMode="edit"/>
                </Grid>
                <Grid item className={classes.icons}>
                    <DeleteIcon className={classes.icon} onClick={() => dispatch(deletePost(post.id))}/>
                </Grid>
            </Grid>
            <Grid item >
                <Typography variant="h6" style={theme.postCategory as Object} >{post.category}</Typography>
            </Grid>
            
        </Grid>
    )
}

export default Post;