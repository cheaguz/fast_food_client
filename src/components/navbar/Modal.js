import * as React from 'react';
import { mock } from '../../utils/mock'
import {IconButton,
        Dialog ,
        ListItemText,
        ListItem,
        List,
        ListItemAvatar,
        ListItemIcon,
        Avatar,
        Divider,
        AppBar,
        Toolbar,
        Typography,
        Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data = mock;

export const Modal = ()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
       variant="outlined"
        onClick={handleClickOpen}
        size="large"
        edge="end"
        color="inherit"
        aria-label="cart"
        sx={{ mr: 2 }}
        >
        <ShoppingCartIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >


        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Mi pedido
            </Typography>
          </Toolbar>
        </AppBar>


        <List>
            {data.map(art => (
                <>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar alt="food" src={art.image} />
                        </ListItemAvatar>
                        <ListItemText primary={art.name} secondary={art.price} />
                        <ListItemIcon onClick={()=>(alert('Eliminar elemento'))}>
                            <CloseIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Divider />
                </>
            ))}        
        </List>
      </Dialog>
    </div>
  );
}
