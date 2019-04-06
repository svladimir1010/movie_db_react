import React, { Component } from "react";
import Button from "../button";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import CardMovie from "../card-movie";
import PropTypes from "prop-types";

const withData = (View, getData) => {
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
            this.listMovie(getData);
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevState.page !== this.state.page) {
                this.listMovie(getData);
            }
        }

        listMovie = data => {
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

        decrement = () => {
            const newPage = this.state.page;
            newPage === 1
                ? this.setState()
                : this.setState({ page: newPage - 1, loading: true });
        };

        increment = () => {
            const newPage = this.state.page;
            this.setState({ page: newPage + 1, loading: true });
        };

        renderItems = arr => {
            return arr.map(movie => {
                return <CardMovie key={movie.id} dataMovie={movie} />;
            });
        };

        render() {
            const { dataList, loading, page, error } = this.state;

            const hasData = !(loading || error);
            const items = this.renderItems(dataList);

            const errorMessage = error ? <ErrorIndicator /> : null;
            const spinner = loading ? <Spinner /> : null;

            const content = hasData ? (
                <Page
                    page={page}
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

const Page = ({ decrement, increment, items, page }) => {
    return (
        <>
            <div className="dashboard-but top">
                <Button decrement={decrement} increment={increment} page={page} />
            </div>
            <div className="popular-content">{items}</div>
            <div className="dashboard-but bottom">
                <Button decrement={decrement} increment={increment} page={page} />
            </div>
        </>
    );
};

Page.propTypes = {
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default withData;
