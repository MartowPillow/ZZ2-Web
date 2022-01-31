import { useState, useEffect } from 'react';
import './Header.css';
import Option from './Option';
import 'bootstrap/dist/css/bootstrap.css';

    function Header({onCheck, onTextChange}) {

        const [isMaleChecked, setIsMaleChecked] = useState([]);
        useEffect(() => setIsFemaleChecked(true),[]);
        const [isFemaleChecked, setIsFemaleChecked] = useState([]);
        useEffect(() => setIsMaleChecked(true),[]);

        const [timer, setTimer] = useState(null);
        const [previousText, setPreviousText] = useState(null);



        const [CountryData, setCountryData] = useState([]);
        useEffect(() => 
            fetch("https://restcountries.eu/rest/v2/all?fields=name", {mode: 'cors'})
                .then(response => response.json())
                .then(json => setCountryData(json))
            ,[]);
        let OptionList = CountryData.map(country => <Option Name={country.name} key={country.name}/>);

        return (
            <header className="app-header">
                <h1>Users</h1>

                <div className="gender_checker" >
                    <h6>Looking for:⠀</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckMale" defaultChecked
                        onChange={() => {
                            if(isMaleChecked)
                                setIsMaleChecked(false);
                            else
                                setIsMaleChecked(true);
                            //set est asynchrone donc c'est pas udpdaté donc on fait l'inverse
                            if((!isMaleChecked && isFemaleChecked) || (isMaleChecked && !isFemaleChecked))
                                onCheck(""); 
                            else if(!isMaleChecked)
                                onCheck("male"); 
                            else
                                onCheck("female"); 
                            }}/>
                        <label className="form-check-label" for="flexCheckMale">
                            Male⠀⠀
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckFemale" defaultChecked 
                        onChange={() => {
                            if(isFemaleChecked)
                                setIsFemaleChecked(false);
                            else
                                setIsFemaleChecked(true);
                            //set est asynchrone donc c'est pas udpdaté donc on fait l'inverse
                            if((isMaleChecked && !isFemaleChecked) || (!isMaleChecked && isFemaleChecked))
                                onCheck(""); 
                            else if(isMaleChecked)
                                onCheck("male"); 
                            else
                                onCheck("female");
                            }}/>
                        <label className="form-check-label" for="flexCheckFemale">
                            Female
                        </label>
                    </div>
                </div>
            
                <div className="country-search">
                    <label for="exampleDataList" className="form-label">Search by country</label>
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."
                    onChange={e => {
                        if (previousText !== e.target.value) {
                            clearTimeout(timer);
                            const timeoutId = setTimeout(() => onTextChange(e.target.value), 1000);
                            setTimer(timeoutId);
                            setPreviousText(e.target.value);
                        }
                        }}/>
                    <datalist id="datalistOptions">
                        {OptionList}
                    </datalist>
                </div>

                <div className="row user_fields">
                    <div className="col-auto">⠀⠀⠀⠀⠀</div>
                    <div className="col-1">Name</div>
                    <div className="col-1">City</div>
                    <div className="col-1">Country</div>
                    <div className="col-1">⠀⠀⠀Age</div>
                    <div className="col-2">Email</div>
                    <div className="col-1">Phone</div>
                </div>
            </header>
        );
    }
    export default Header;