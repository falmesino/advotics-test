import { FC } from 'react'

type TButton = {
  onClick: () => void
  customClassName?: string
  [otherProps: string]: any
}

const Button:FC<TButton> = ({
  onClick,
  customClassName = '',
  ...props
}) => {
  return (
    <div onClick={() => onClick}>
      {props.children}
    </div>
  )
}

export default Button