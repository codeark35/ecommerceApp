import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io"; 
export function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next-arrow" onClick={onClick}>
       
        <IoIosArrowForward size={16}/>
      </div>
    );
  }
  
export function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
        <IoIosArrowBack  size={16}/>
        
      </div>
    );
  }