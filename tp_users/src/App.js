import './App.css';
import { useState, useEffect } from 'react';
import Header from './header/Header';
import User from './user/User';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [data, setData] = useState([]);
  useEffect(() => 
    fetch('https://randomuser.me/api/?results=10', {mode: 'cors'})
      .then(response => response.json())
      .then(json => setData(json.results))
    ,[]);

  let UserList = data.map(user => <User name={user.name.first + ' ' + user.name.last} 
    city={user.location.city} age={user.dob.age} country={user.location.country}
    phone={user.cell} email={user.email} gender={user.gender} imglink={user.picture.large}
    key={user.email}
  />);

  const queryString = (gender, text) => {return`${gender?'&gender='+gender:''}${text?'&nat='+text:''}`;};

  const [selectedGender, setSelectedGender] = useState(null);
  const HeaderFunction = gender => {
                                fetch('https://randomuser.me/api/?results=10'+queryString(gender,searchText), {mode: 'cors'})
                                  .then(response => response.json())
                                  .then(json => setData(json.results));    
                                setSelectedGender(gender);                            
  }

  const [searchText, setSearchText] = useState(null);
  const SearchbarFunction = txt => {
                                fetch('https://restcountries.eu/rest/v2/name/'+txt, {mode: 'cors'})
                                  .then(response => response.json())
                                  .then(json => {
                                    if(json[0]){
                                      fetch('https://randomuser.me/api/?results=10'+queryString(selectedGender,json[0].alpha2Code), {mode: 'cors'})
                                        .then(response => response.json())
                                        .then(json => setData(json.results));
                                      setSearchText(json[0].alpha2Code);
                                    }
                                  });
  }

  return (
    <section className="app-container">
      <Header onCheck = {HeaderFunction} onTextChange={SearchbarFunction}/>
      <section className="app-content">   
        {UserList}
      </section>
      <div className="overlay"></div>
    </section>
  );
}

export default App;
