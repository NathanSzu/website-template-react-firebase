import React, { useEffect } from 'react'
import { InFromTop, InFromBottom } from '../utils/script'

export default function AnimationTest() {

    useEffect(() => {
        InFromTop()
        InFromBottom()
    }, [])

    return (
        <div className='flex-wrap'>
            <div className='animation-test InFromTop'>

            </div>
            <div className='animation-test InFromTop'>

            </div>
            <div className='animation-test InFromTop'>

            </div>
            <div className='animation-test InFromTop'>

            </div>
            <div className='animation-test InFromBottom'>

            </div>
            <div className='animation-test InFromBottom'>

            </div>
            <div className='animation-test InFromBottom'>

            </div>
            <div className='animation-test InFromBottom'>

            </div>
        </div>
    )
}
