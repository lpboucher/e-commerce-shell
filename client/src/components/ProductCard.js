import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProductCard = ({ title, image, price, description }) => {
  return (
    <Card>
        <CardHeader
          title={title}
          subheader={price}
        />
        <CardMedia
          style={{height: 200}}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
  );
};

export default ProductCard;
