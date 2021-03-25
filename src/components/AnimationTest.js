import React, { useEffect } from 'react'
import { InFromTop, InFromBottom, InFromLeft, InFromRight } from '../utils/script'
import BootstrapModal from './BootstrapModal'

export default function AnimationTest() {

    useEffect(() => {
        InFromTop();
        InFromBottom();
        InFromLeft();
        InFromRight();
    }, [])

    return (
        <>
            <div className='flex-wrap'>
                <div className='animation-test InFromLeft'>

                </div>
                <div className='animation-test InFromTop'>

                </div>
                <div className='animation-test InFromBottom'>

                </div>
                <div className='animation-test InFromRight'>

                </div>
            </div>
            <BootstrapModal />
        </>
    )
}
