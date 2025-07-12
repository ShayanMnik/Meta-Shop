import { type ComponentProps } from 'react'

type TVariant = 'red' | 'blue' | 'green' | 'yellow' | 'black'

type TCircle = ComponentProps<"div">& {
    variant? : TVariant 
}

function ColorCircle({} :TCircle) {
  return (
    <div style={{...circleColor}} className='w-5 h-5 rounded-full border mt-1'></div>
  )
}

export default ColorCircle

function circleColor(variant :TVariant){
    if (variant === 'red') {
        return {backgroundColor:"red"}
    }
    else if (variant === 'blue') {
        return {backgroundColor:"blue"}
    }
    else if (variant === 'green') {
        return {backgroundColor:"green"}
    }
    else if (variant === 'yellow') {
        return {backgroundColor:"yellow"}
    }
    else if (variant === 'black') {
        return {backgroundColor:"black"}
    }
}