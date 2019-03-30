import React from "react";
import "./header.css";

const SearchPanel = () => {
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
					<div
						role="separator"
						className="dropdown-divider"
					/>
					<a className="dropdown-item" href="foo">
						Separated link
					</a>
				</div>
			</div>
			<input
				type="text"
				className="form-control"
				aria-label="Text input with dropdown button"
				placeholder="Search"
			/>
		</div>
	);
};

export default SearchPanel;
