import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 500, margin: 2 }}>
      <CardMedia sx={{ height: 200 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          USD {item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ height: 80 }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="outlined" size="small" style={{ padding: 1 }}>
            Mas info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
