import PButton from "../PButton/PButton";
import "./PSelect.css";
import Select, { components } from 'react-select';


function PSelect(props:any) {

  function CustomIndicatorContainer(inProps: any) {
    return(
      <components.IndicatorsContainer 
      {...inProps}
      > 
      { props.keyword.length >= 2? 
          <PButton 
            className={props.onClearClassName}
            onClick={props.onClear}
            imageClassName={props.onClearImgClassName}
            src={props.clearIconSrc}
            alt={props.alt}
            text=""
          />
          :<></>
      }
      </components.IndicatorsContainer>
    )
  }

  
  return (
    <Select
      ref={props.ref}
      name={props.name}
      id={props.id}
      isClearable={true}
      placeholder=""
      className={props.className}
      classNamePrefix={props.classNamePrefix}
      classNames={props.classNames}
      value={props.value}
      defaultValue={props.defaultValue}
      inputValue={props.inputValue}       //get input value
      onInputChange={props.onInputChange} //trigger when input change
      onChange={props.onChange}           //when menu option is picked
      onKeyDown={props.onKeyDown}
      onBlur={props.onBlur}               //hide menu
      menuIsOpen={props.menuIsOpen}       //open menu
      options={props.options}             //menu option list
      escapeClearsValue                   //esc button clears value
      components={{IndicatorsContainer: (indicatorProps) => (
        <CustomIndicatorContainer {...indicatorProps}/>
      )}}
      />
  )
}

export default PSelect;