import PImage from '../PImage/PImage';
import PText from '../PText/PText';
import './PButton.css';


function PButton(props: any) {
  return (
    <button 
      className={props.className} 
      onClick={props.onClick}>
      <PImage className={props.imageClassName} src={props.src} alt={props.alt}/> 
      <PText className={props.textClassName} text={props.text} />
    </button>
  )
}

export default PButton;