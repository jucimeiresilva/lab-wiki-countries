import react from "react";
import { Link } from "react-router-dom";

export const CountryList = ({ countries }) => {
    return (<>
    {countries.map(country => {
        return (<Link
                     key = {country.alfa3code}
                     className = 'list-group-item list-group-item-action'
                     to = {`/${country.alpha3Code}`}
                 >
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2code.toLowerCase()}.png`}
                        alt='flag'
                        style={{width: '25px', margin: '2px 10px 2px 2px'}}
                        />
                        {country.name.common}
                </Link>)
    })}
   </>);
};