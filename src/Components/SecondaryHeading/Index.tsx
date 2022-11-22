import React from 'react'
import { SecondaryHeading, TertiraryHeadingMini, UnderlineRed } from '../GlobalStyle'

const Index = ({ heading, sub_heading }) => {
    return (
        <>
            <SecondaryHeading className='text-center'>{heading}</SecondaryHeading>
            <TertiraryHeadingMini className='text-center'>{sub_heading}</TertiraryHeadingMini>
            <div>
                <UnderlineRed />
                {/* <BlackDot/> */}
            </div>
        </>
    )
}

export default Index