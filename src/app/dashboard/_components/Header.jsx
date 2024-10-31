import React from 'react'
import Image from 'next/image'
import globe from '/public/globe.svg'
function Header() {
    return (
        <div>
            <div>
                <Image src={globe} alt='LOGO' width={30} height={30} />
            </div>
        </div>
    )
}

export default Header
