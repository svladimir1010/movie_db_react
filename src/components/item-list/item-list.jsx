import React from "react";
import "./item-list.css";
import { Grid } from "@material-ui/core";

const ItemList = props => {
    const { errorMessage, spinner, content } = props;
    return (
        <Grid container spacing={24} className="dashboard">
            {errorMessage}
            {spinner}
            {content}
        </Grid>
    );
};

export default ItemList;
