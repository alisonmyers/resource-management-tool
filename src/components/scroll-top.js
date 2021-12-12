import React, {useState} from 'react';
import {FaArrowCircleUp} from '@react-icons/all-files/fa/FaArrowCircleUp';


const ScrollArrow = () =>{

    if (typeof window !== `undefined`){
        window.location.replace(res.data) // Window call
      }

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 500){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;