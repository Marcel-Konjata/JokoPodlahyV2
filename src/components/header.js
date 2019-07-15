import PropTypes from "prop-types"
import React from "react"
import HeaderLogo from "./HeaderLogo"
import SideMenu from "./SideMenu"
import { CSSTransition } from "react-transition-group"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import("../index.scss")

class Header extends React.Component {
  state = {
    windowWidth: '',
    windowHeight: '',
    hamburgerTogle: false,
    isScroled:false,
    showHamburgerMenu: false,
  } 
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowParameters);
    window.addEventListener("scroll", this.handleScroll);
  }

  updateWindowParameters = () => {
    if(window !== undefined){
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })

      if(this.state.windowWidth <= 839 && this.state.windowWidth !== ''){
        this.setState({showHamburgerMenu:true})
      }
      if(this.state.windowWidth > 839 || this.state.windowWidth === ''){
        this.setState({showHamburgerMenu:false})
      }
      
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowParameters);
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleTogle = () => {
    this.setState(currentstate => {
      const updateValue = !currentstate.hamburgerTogle
      return { hamburgerTogle: updateValue }
    })
  }
  handleScroll =()=>{
    const windowPos = window.scrollY;
    if(windowPos>0){
      this.setState({isScroled:true})
    }
    else this.setState({isScroled:false})
  }

  render() {
    const { siteTitle } = this.props
    return (
      <header className={`main-header ${this.state.isScroled && "scrolled"}`}>
        <div className="wrapper">
          <div className="main-page">
            <AniLink fade to="/" className="main-header-logo">
              {siteTitle}
            </AniLink>
          </div>

          {this.state.showHamburgerMenu ? (
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
              <AniLink cover direction="right" bg="#572d2d" to="/kdo_jsme" activeClassName="active">
                Kdo jsme
              </AniLink>
              <AniLink cover direction="bottom" bg="#572d2d" to="/galerie" activeClassName="active">
                Galerie
              </AniLink>
              <AniLink fade to="/kontakt" activeClassName="active">
                Kontakt
              </AniLink>
            </nav>
          )}
        </div>
        <HeaderLogo animationOnStart={this.props.animated} />

        <CSSTransition
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 800, exit: 1000 }}
          classNames="anim"
          in={this.state.hamburgerTogle}
        >
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
