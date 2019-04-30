import React from "react";
import "./header.css";
import SwapiService from "../../services";

class SearchPanel extends React.Component {
    swapiService = new SwapiService();
    regExp = /\//;
    state = {
        search: [],
        name: null
    };

    componentDidMount() {}

    getSearch = () => {
        let { name } = this.state;
        if (name.length > 2) {
            this.swapiService
                .getSearchMovie(name)
                .then(res => {
                    this.setState({
                        search: res
                    });
                })
                .catch(err => {
                    console.log("Something in search is wrong");
                });
        }
        this.setState({ name: null });
    };

    handleChange = name => event => {
        console.log(event.target.value);
        this.setState({ [name]: event.target.value }, () =>
            this.getSearch(name)
        );
    };

    goToDetail = (e, id) => {
        e.preventDefault();
        const url = this.regExp.exec(this.props.location.pathname)[0];
        this.props.history.push(url + `ditail/` + id);
        this.setState({ search: null });
    };

    render() {
        const { search, name } = this.state;
        this.Search =
            search &&
            search.map(s => (
                <li key={s.id} className="nav">
                    <div button onClick={e => this.goToDetail(e, s.id)}>
                        <div>{s.title}</div>
                    </div>
                </li>
            ));

        const SearchItems = (this.SearchItems = (
            <ul className="searchList">{this.Search}</ul>
        ));

        return (
            <div className="input-group mb-3 ml-auto">
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="foo">
                            Action
                        </a>
                        <a className="dropdown-item" href="foo">
                            Another action
                        </a>
                        <a className="dropdown-item" href="foo">
                            Something else here
                        </a>
                        {/* <div
							role="separator"
							className="dropdown-divider"
						/> */}
                        {/* <a className="dropdown-item" href="foo">
							Separated link
						</a> */}
                    </div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    aria-label="Text input with dropdown button"
                    placeholder="Let's search movie"
                    onChange={this.handleChange("name")}
                />
                {SearchItems}
            </div>
        );
    }
}

export default SearchPanel;
