import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
    return (
        <Grid container>
            { products.map(currentProduct => (
                <Grid item>
                    <ProductCard 
                        key={currentProduct._id}
                        title={currentProduct.title}
                        description={currentProduct.description}
                        image={currentProduct.imagePath}
                        price={currentProduct.price}
                    />
                </Grid>
            )) }
        </Grid>
    );
};

export default ProductList;