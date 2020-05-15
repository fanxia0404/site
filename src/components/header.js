import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Avatar from "./avatar"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="Header-item mr-6">
      <Link
        className="Header-link f2 d-flex flex-items-center"
        to="/"
      >
        <div 
          className="CircleBadge CircleBadge--small float-left mr-3"
        >
          <div className="width-full">
            <Avatar />
          </div>
        </div>
        <span>{siteTitle}</span>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
