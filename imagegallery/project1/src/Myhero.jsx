import { data } from 'autoprefixer';
import './Hero.css';

function Hero({label, borderColor, bgColor}) {

  console.log(label);
  
  
  return  (
    
    <button className={`border ${ borderColor ? borderColor : "border-blue-500"}
     bg-slate-400 rounded-md m-4 p-2
     ${ bgColor ? bgColor : "bg-black-500"}
     `}>{label}</button>
    
  )

}

export default Hero;