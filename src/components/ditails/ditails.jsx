import React from "react";
import "./ditails.css";

// import {
//     Grid,
//     Typography,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow
// } from "@material-ui/core";
// import Button from "../button";
// import Spinner from "../spinner";
// import ErrorIndicator from "../error-indicator";

import SwapiService from "../../services";

export default class Ditails extends React.Component {
    swapi = new SwapiService();

    state = {
        dataMovie: [],
        id: 1,
        loading: true,
        error: false
    };

    render() {
        const getData = this.swapi.getDitails(5).then(body => console.log(body));

        return(
            <h1>There will be details here</h1>
        );
    }
}
