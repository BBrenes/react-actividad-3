import React, {useState, useContext} from 'react';
import { ThemeContext } from './ThemeContext'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import CreateIcon from '@material-ui/icons/Create';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IconButton } from '@material-ui/core';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

export default function PostModal() {
    const theme = useContext(ThemeContext)
    const [open, setOpen] = React.useState(false);
    const [post, setPost]= useState({
      id: '',
      title: '',
      description:'',
      category: '',
      imageURL: ''
    })
    const [formOk, setFormOk] = useState(null);
  
    const handleClickOpen = () => {
      setOpen(true);
      setId();
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleChange = e => {
      const {name, value} = e.target;
      setPost(prevState=>({
        ...prevState,
        [name]: value
      }))
    }
    
    const setId = () => {
      const newId = new Date().getTime().toString()
      setPost({
        id: newId,
        title: '',
        description:'',
        category: '',
        imageURL: 'https://source.unsplash.com/random'
      })
      setFormOk(null)
    }
  
    const createPost = () => {
      if(
        post.title === "" ||
        post.description === "" ||
        post.category === "" ||
        post.imageURL === ""      
      ){
        setFormOk(false)
      }else{
        console.log(post)
        setOpen(false)
      }
    }
  
    return (
      <div>
        <Grid container justifyContent="flex-end" alignItems="center" >
            <Grid item>
                <IconButton style={theme.createButton} onClick={handleClickOpen} >
                    <CreateIcon />
                </IconButton>
            </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{textAlign: "center"}}>Create Post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              name="description"
              id="description"
              label="Description"
              type="text"
              fullWidth
              onChange={handleChange}
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    value={post.category}
                    onChange={handleChange}
                >
                    <MenuItem value={'travel'}>Travel</MenuItem>
                    <MenuItem value={'lifestyle'}>Lifestyle</MenuItem>
                    <MenuItem value={'business'}>Business</MenuItem>
                    <MenuItem value={'food'}>Food</MenuItem>
                    <MenuItem value={'work'}>Work</MenuItem>
                </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              name="imageURL"
              id="imageURL"
              label="Image URL"
              type="text"
              fullWidth
              onChange={handleChange}
              value={post.imageURL}
            >
            </TextField>
            <InsertLinkIcon style={theme.linkIcon}/>
            {
                formOk === false ? 
                <DialogContentText style={theme.modalErrorMessage}>
                    Fill all the required fields
                </DialogContentText> :
                <></>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={createPost} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }