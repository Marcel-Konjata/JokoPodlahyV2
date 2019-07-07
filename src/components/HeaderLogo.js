import React from "react"
import Handwriting from "../assets/Handwriting.inline.svg"


function HeaderLogo({animationOnStart}) {
    
 
  return (
    <div className={`svg-writing ${animationOnStart === true ?  'animated' : ''}`}>
      <span className="logo-line--left" />
      <Handwriting />

      <span className="logo-line--right" />
    </div>
  )
}
//I cherated a litle bit to find out Handwritting dash lengths created svg in outside of project 
//then I used vanilla js queryselector + foreach -> get total lenght for all paths
//I believe that in react is possible do this logic in class component via refenrence 

/*leterr0 is 255.6611785888672
index.js:6 leterr1 is 58.50779342651367
index.js:6 leterr2 is 76.83780670166016
index.js:6 leterr3 is 76.46903991699219
index.js:6 leterr4 is 119.73706817626953
index.js:6 leterr5 is 66.22315979003906
index.js:6 leterr6 is 218.80224609375
index.js:6 leterr7 is 58.50824737548828
index.js:6 leterr8 is 76.83792114257812
index.js:6 leterr9 is 96.34935760498047
index.js:6 leterr10 is 66.2232437133789
index.js:6 leterr11 is 93.84085083007812
index.js:6 leterr12 is 66.22320556640625
*/

export default HeaderLogo
