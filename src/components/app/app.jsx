import React, {Component} from 'react'
import Header from '../header'
import PopularMoviesList from '../popular-movie-list';
// import Spinner from '../spinner'
import './app.css'

export default class App extends Component {

    render(){
        return(
            <div className='app'>
                <Header />
               
                <PopularMoviesList />
                {/* <Spinner /> */}
            </div>
        )
    }
}