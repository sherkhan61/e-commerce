import React from 'react';
import { Grid } from '@material-ui/core'
import Product from "./Product/Product";

import useStyles from './styles'
const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://assets.reebok.com/images/w_600,f_auto,q_auto/e766e993884e4e81a478ab1300dc2666_9366/Forever_Floatride_Energy_2_Women\'s_Running_Shoes_Grey_EF6909_01_standard.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://nout.kz/upload/iblock/ae7/1.jpg'}
]

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products