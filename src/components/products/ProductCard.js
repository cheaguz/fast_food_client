import React from 'react'
import { useDispatch } from 'react-redux'
import {mock} from '../../utils/mock'
import {AddCart} from '../../redux/actions/CartAction'

import { Container, Typography, Button, Card , CardMedia,CardContent,CardActions , Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const menu = mock

export const ProductCard = () => {
    const dispatch = useDispatch()

    const addProduct = (product) => dispatch( AddCart(product) )

  return (
        <Container>
            <Grid container spacing={2}>
                {menu.map(m=>(  
                        <Grid item xs={12} sm={6} md={4} key={m.id}>
                            <Card sx={{ maxWidth: 345 , marginTop: '2%'}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={m.image}
                                    alt="food"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"> {m.name} </Typography>
                                    <Typography variant="body2" color="text.secondary"> {m.description} </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" fullWidth onClick={()=>{addProduct(m)}}>
                                        <ShoppingCartIcon />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                ))}
            </Grid>
        </Container>
  )
};





