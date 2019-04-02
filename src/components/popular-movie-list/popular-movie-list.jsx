import React, { Component } from "react";
import "./popular-movie-list.css";
import { Grid } from "@material-ui/core";
import Button from "../button";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import CardMovie from "../card-movie";
import PropTypes from "prop-types";

// ================================================

const PopularMoviesList = props => {
    const { errorMessage, spinner, content } = props;
    return (
        <Grid container spacing={24} className="dashboard">
            {errorMessage}
            {spinner}
            {content}
        </Grid>
    );
};

// =================================================

const Page = ({ decrement, increment, items }) => {
    return (
        <>
            <div className="dashboard-but top">
                <Button decrement={decrement} increment={increment} />
            </div>
            <div className="popular-content">{items}</div>
            <div className="dashboard-but bottom">
                <Button decrement={decrement} increment={increment} />
            </div>
        </>
    );
};

Page.propTypes = {
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};
// ============================================================================
const withData = View => {
    return class extends Component {
        state = {
            dataList: [],
            page: 1,
            loading: true,
            error: false
        };

        onError = err => {
            this.setState({
                error: true,
                loading: false
            });
        };

        componentDidMount() {
            const { getData } = this.props;
            this.listPopular(getData);
        }

        componentDidUpdate(prevProps, prevState) {
            const { getData } = this.props;
            if (prevState.page !== this.state.page) {
                this.listPopular(getData);
            }
        }

        listPopular = data => {
            const page = this.state.page;
            if (page) {
                return data(page)
                    .then(dataList => {
                        this.setState({
                            dataList: dataList,
                            loading: false
                        });
                    })
                    .catch(this.onError);
            }
        };

        increment = () => {
            const newPage = this.state.page;
            newPage === 1
                ? this.setState()
                : this.setState({ page: newPage - 1, loading: true });
        };

        decrement = () => {
            const newPage = this.state.page;
            this.setState({ page: newPage + 1, loading: true });
        };

        renderItems = arr => {
            return arr.map(movie => {
                return <CardMovie key={movie.id} dataMovie={movie} />;
            });
        };

        render() {
            const { dataList, loading, error } = this.state;

            const hasData = !(loading || error);
            const items = this.renderItems(dataList);

            const errorMessage = error ? <ErrorIndicator /> : null;
            const spinner = loading ? <Spinner /> : null;

            const content = hasData ? (
                <Page
                    items={items}
                    decrement={this.decrement}
                    increment={this.increment}
                />
            ) : null;

            return (
                <View
                    {...this.props}
                    errorMessage={errorMessage}
                    spinner={spinner}
                    content={content}
                />
            );
        }
    };
};

export default withData(PopularMoviesList);
