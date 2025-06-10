import React, { type ComponentProps } from 'react'
import ColorCircle from '../colorCircle/ColorCircle'
import Button from '../button/Button'
import TrashCan from '../../assets/img/traschCan.svg'
import add from '../../assets/img/Add.svg'
import remove from '../../assets/img/remove.svg'



type TVariant = 'red' | 'blue' | 'green' | 'yellow' | 'black'

type TChildren = ComponentProps<"div"> & {
    variant?: TVariant
}

function CartItem({ children, variant }: TChildren) {
    return (
        <div className='h-44 flex p-4  shadow mb-3 rounded'>
            <img className='ml-3 rounded' src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="1" />

            <div className='w-full mr-7'>
                <h1 className='text-xl'>عنوان محصول</h1>
                <p className='flex gap-8 mt-4 h-5 text-lg'>رنگ : <ColorCircle variant={variant} /> </p>
                <div className='w-full flex items-center justify-between mt-7 mb-4 gap-6'>
                    <div className='flex items-center justify-start gap-1'>
                        <Button className='px-1 py-1 rounded text-2xl cursor-pointer active:shadow'>
                            <img src={add} alt="add" />
                        </Button>
                        <p className='px-2 py-1 flex items-center justify-center text-center text-base'>{12}</p>
                        <Button className='px-1 py-1 rounded text-2xl cursor-pointer active:shadow'>
                            <img src={remove} alt="remove" />
                        </Button>
                    </div>
                    <Button className='flex items-center justify-center h-10 w-8 rounded cursor-pointer active:shadow'>
                        <img className='w-6 h-9' src={TrashCan} alt="Delete" />
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default CartItem