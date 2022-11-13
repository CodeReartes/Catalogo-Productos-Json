import "./Heart.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Heart = () => {
   
  const [liked, setliked] = useState(false)
  
  /*Operador ternario*/
  const handleClick = () => {
    liked === true ? setliked(false) : setliked(true)
  }

  return (
    <div onClick={handleClick}>
        {liked === true ? <FaHeart className="heart"/> : <FaRegHeart className="heart"/>}
        
    </div>
  )
}

export {Heart}