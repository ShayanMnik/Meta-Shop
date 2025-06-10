import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='h-20 border-b shadow flex items-center'>
            <Container>
                <div className='flex justify-between  items-center'>
                    <ul className='flex flex-row-reverse '>
                        <li className='ml-4'>
                            <Link to={"/"}>
                                خانه
                            </Link>
                        </li>
                        <li className='ml-4'>
                            <Link to={"/store"}>
                                فروشگاه
                            </Link>
                        </li>
                    </ul>
                    <Link to={"/cart"}>
                        <button className='cursor-pointer'>سبد خرید</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Navbar