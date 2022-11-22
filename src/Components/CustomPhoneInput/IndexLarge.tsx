import React from 'react'
import CountryPhoneInput, {
    ConfigProvider,
} from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import { PhoneLargeInputStyled } from './style';


const Index = () => {

    const [value, setValue] = React.useState({ short: 'US' });

    return (
        <PhoneLargeInputStyled>
            <ConfigProvider locale={en}>
                <CountryPhoneInput
                    value={value}
                    placeholder='(617) 397 - 8483'
                    onChange={(v) => {
                    setValue(v);
                    }}
                    className="your-custom-class w-100"
                />
            </ConfigProvider>
        </PhoneLargeInputStyled>
    )
}

export default Index