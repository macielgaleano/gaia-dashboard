import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
// import { Link } from "react-router-dom";

const MainFooter = ({ contained, menuItems, copyright }) => <></>;

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string,
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2018 DesignRevision",
  menuItems: [
    {
      title: "Home",
      to: "#",
    },
    {
      title: "Services",
      to: "#",
    },
    {
      title: "About",
      to: "#",
    },
    {
      title: "Products",
      to: "#",
    },
    {
      title: "Blog",
      to: "#",
    },
  ],
};

export default MainFooter;
