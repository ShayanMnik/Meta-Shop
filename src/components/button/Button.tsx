import React, { Children, type ComponentProps } from 'react'

type TVariant = "cyan" | "blue" | "green" | "yellow" | "red"

type TButton = ComponentProps<"button"> & {
  variant?: TVariant
}

function checkVariant(variant: TVariant) {
  if (variant === "cyan") {
    return { backgroundColor: "cyan", color: "#1b1b1b" }
  }
  else if (variant === "blue") {
    return { backgroundColor: "#2c73d2", color: "#fbeaff" }
  }
  else if (variant === "green") {
    return { backgroundColor: "#32d832", color: "#fff" }
  }
  else if (variant === "yellow") {
    return { backgroundColor: "yellow", color: "#1b1b1b" }
  }
  else if (variant === "red") {
    return { backgroundColor: "red", color: "#fff" }
  }
}

function Button({ children, variant, ...rest }: TButton) {
  return (
    <button style={{ ...checkVariant(variant) }} className='cursor-pointer' {...rest}>
      {children}
    </button>
  )
}

export default Button;