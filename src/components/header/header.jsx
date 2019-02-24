import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.less';
class PublicHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        record: PropTypes.any,
        confirm: PropTypes.any
    }
    render() {
        return (
            <header className="header-container">
                <span className="header-slide-icon icon-catalog"></span>
                <span className="header-title">{this.props.title}</span>
                {this.props.record&&<NavLink to="/record" exact className="header-link icon-jilu"></NavLink>}
                {this.props.confirm&&<NavLink to="/" exact className="header-link header-link-confim"></NavLink>}
            </header>
        );
    }
}
export default PublicHeader;