import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services";

const swapiService = new SwapiService();

const { 
    getPopularMovies, 
    getAllMovies, 
    getKidsMovies 
} = swapiService;

const GetPopularMovies = withData(ItemList, getPopularMovies);

const GetAllMovies = withData(ItemList, getAllMovies);

const GetKidsMovies = withData(ItemList, getKidsMovies);

export { 
    GetPopularMovies, 
    GetAllMovies, 
    GetKidsMovies 
};
