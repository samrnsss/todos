import React from "react";
import PropTypes from 'prop-types';

export default function Header({ title, searchBar }) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand">{title}</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    { searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : null}
                    </div>
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}