import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
    return (
        <Grid container>
            { products.map(currentProduct => (
                <Grid item key={currentProduct._id}>
                    <Link to="/cart">
                        <ProductCard 
                            title={currentProduct.title}
                            description={currentProduct.description}
                            image={currentProduct.imagePath}
                            price={currentProduct.price}
                        />
                    </Link>
                </Grid>
            )) }
        </Grid>
    );
};

export default ProductList;