import * as React from 'react';
import { useDispatch, useSelector, } from 'react-redux'
import { removeProduct } from '../../redux/actions/CartAction'
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



export const Modal = ()=> {
  
  const [open, setOpen] = React.useState(false);
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteProduct = (id) =>dispatch( removeProduct(id) )

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
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Mi pedido
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
            {cart.map(art => (
                <>
                    <ListItem button key={art.product.id+1000}>
                        <ListItemAvatar>
                            <Avatar alt="food" src={art.product.image} />
                        </ListItemAvatar>
                        <ListItemText primary={art.product.name} secondary={art.product.price} />
                        <ListItemIcon onClick={()=>deleteProduct(art.product.id)}>
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
