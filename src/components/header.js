import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./HeaderLogo"
import("../index.scss")

class Header extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowParameters)
  }

  updateWindowParameters = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowParameters)
  }

  render() {
    const { siteTitle } = this.props
    return (
      <header className="main-header">
        <div className="wrapper">
          <div className="main-page">
            <Link to="/" className="main-header-logo">
              {siteTitle}
            </Link>
          </div>

          {this.state.windowWidth <= 839 ? null : (
            <nav className="main-header-nav">
              <Link to="/kdo_jsme">Kdo jsme</Link>
              <Link to="/galerie">Galerie</Link>
              <Link to="/kontakt">Kontakt</Link>
            </nav>
          )}
        </div>
        <HeaderLogo animationOnStart={this.props.animated} />
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  animated: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
