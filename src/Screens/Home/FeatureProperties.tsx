import React from 'react';
import SecondaryHeading from '../../Components/SecondaryHeading/Index';
import Properties from './Properties';
import { FeaturePropertiesStyled } from './style';

const FeatureProperties = () => {
  return (
    <FeaturePropertiesStyled>
    <SecondaryHeading heading='Featured Properties' sub_heading="Browse The Best Of Our Latest Listing's"/>
    <Properties/>
    </FeaturePropertiesStyled>
  )
}

export default FeatureProperties