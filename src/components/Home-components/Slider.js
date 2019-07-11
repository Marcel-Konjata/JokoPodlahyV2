import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"

//for clearer understanding read from the bottom to the top
// concept is based on passing children of children using map function

const Dots = props => {
  return (
    <span
      className="dots"
      style={{
        width: "60%",
        display: "inline-block",
        zIndex: "100",
        textAlign: "center",
        position: "absolute",
      }}
    >
      {props.children}
    </span>
  )
}



const Container = ({ position, handleClick, children, total }) => {
  return (
    <div
      className="slider"
      style={{
        position: "relative",
        overflow: "hidden",
        height: 350,
        minWidth: 373,
        width: "660px",
        border: "2px solid black",
      }}
    >
      <React.Fragment>
        {children}
        <div
          className="arrow"
          onClick={handleClick}
          data-position={position - 1}
        >
          arrow
        </div>
        <div
          className="arrow right"
          onClick={handleClick}
          data-position={position + 1}
        >
          arrow
        </div>
        <Dots>
          {Array(...Array(total)).map((val, index) => (
            <span className='dot' key={index} onClick={handleClick} data-position={index}>
              {index === position ? "● " : "○ "}
            </span>
          ))}
        </Dots>
      </React.Fragment>
    </div>
  )
}

const Carousel = makeCarousel(Container)

function Slider({ children }) {
  //for each top level child it will create index tha is needed to find out how many
  //marks we need to indicate to user number of slides

  return (
    <Carousel defaultWait={10000}>
      {children.map((child, id) => (
        <Slide key={id} right>
          {child}
        </Slide>
      ))}
    </Carousel>
  )
}

export default Slider
