import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./HeaderLogo"
import SideMenu from "./SideMenu"
import { CSSTransition } from "react-transition-group"
import("../index.scss")

class Header extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    hamburgerTogle: false,
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
  handleTogle = () => {
    this.setState(currentstate => {
      const updateValue = !currentstate.hamburgerTogle
      return { hamburgerTogle: updateValue }
    })
  }

  render() {
    console.log(this.state.hamburgerTogle)
    const { siteTitle } = this.props
    return (
      <header className="main-header">
        <div className="wrapper">
          <div className="main-page">
            <Link to="/" className="main-header-logo">
              {siteTitle}
            </Link>
          </div>

          {this.state.windowWidth <= 839 ? (
            <div
              className={`hamburger ${
                this.state.hamburgerTogle ? "active" : ""
              }`}
              onClick={this.handleTogle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <nav className="main-header-nav">
              <Link to="/kdo_jsme">Kdo jsme</Link>
              <Link to="/galerie">Galerie</Link>
              <Link to="/kontakt">Kontakt</Link>
            </nav>
          )}
        </div>
        <HeaderLogo animationOnStart={this.props.animated} />
       
          <CSSTransition mountOnEnter unmountOnExit timeout={{enter:800, exit:1000}} classNames='anim' in={this.state.hamburgerTogle}>
            <SideMenu toggle={this.handleTogle} />
          </CSSTransition>

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
