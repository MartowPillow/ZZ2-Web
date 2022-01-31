//import { useState, useEffect } from 'react';
import './User.css';
import 'bootstrap/dist/css/bootstrap.css';

//"https://restcountries.eu/rest/v2/alpha/"+country_code

    function User({name, city, age, email, phone, imglink, country}) {

        // //pour trouver le pays a partir du code de pays
        // const [CountryData, setCountryData] = useState([]);
        // useEffect(() => 
        //     fetch("https://restcountries.eu/rest/v2/alpha/"+country_code, {mode: 'cors'})
        //         .then(response => response.json())
        //         .then(json => setCountryData(json))
        //     ,[]);

        // let Country = ""+CountryData.name;

        // let Country_short = "";
        
        // if(Country === "United States of America")
        //     Country_short = "USA";
        // else if(Country === "United Kingdom of Great Britain and Northern Ireland")
        //     Country_short = "Great Britain";
        // else{
        //     for (var i = 0; (i < Country.length && Country[i]!=='(') ; i++)
        //         Country_short += Country[i];
        // }



        return (
            <div className="row user">
                <img src={imglink} alt="profile_picture" style={{width:'80px', height:'50px'}}></img>
                <div className="col-1">{name}</div>
                <div className="col-1">{city}</div>
                <div className="col-1">{country}</div>
                <div className="col-1">{"⠀⠀⠀⠀"+age}</div>
                <div className="col-2">{email}</div>
                <div className="col-1">{phone}</div>
            </div>
        );
    }
    export default User;