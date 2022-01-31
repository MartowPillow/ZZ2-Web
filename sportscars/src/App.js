//import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Model from './model/Model';
import { useState, useEffect } from 'react';
//import data from './TD4.js';
//http://cabe0232.odns.fr/sportscars-api

function App() {


  const [modeldata, setModeldata] = useState([]);
  //setModeldata(data);//error
  //modeldata = data; //interdit
  //setTimeout(() => setModeldata(data), 2000);
  //useEffect(() => setModeldata(data), []);

  useEffect(() => 
    fetch('http://cabe0232.odns.fr/sportscars-api')
      .then(response => response.json())
      .then(json => setModeldata(json))
    ,[]);

  let models = modeldata.flatMap(brand => {
    return brand.models.map(model =>{
      return {...model, brand: brand.name};
    });
  });
  let modelElements = models.map(model => <Model name={model.name} brand={model.brand} cars={model.cars} key={model.id}/>);

  const queryString = (menu, text) => {return`${menu?'sort='+menu:''}${text?'&search='+text:''}`;};

  const [menuClicked, setMenuClicked] = useState(null);
  const HeaderFunction = menu => {
                                fetch('http://cabe0232.odns.fr/sportscars-api?'+queryString(menu,searchText))
                                  .then(response => response.json())
                                  .then(json => setModeldata(json));
                                setMenuClicked(menu);
  }
  const [searchText, setSearchText] = useState(null);
  const SearchbarFunction = txt => {
                                fetch('http://cabe0232.odns.fr/sportscars-api?'+queryString(menuClicked,txt))
                                  .then(response => response.json())
                                  .then(json => setModeldata(json));
                                setSearchText(txt);
  }

  /* test fetch
  fetch("https://reqres.in/api/users?page=1")
    .then(res => res.json())
    .then(json => Promise.all(
      json.data
        .filter((user, idx) => idx <= 2)
        .map(user =>
          fetch("https://reqres.in/api/users/" + user.id)
            .then(response => response.json()))))
    .then(data => console.log(data));*/

  return (
    <section className="app-container">

      <Header onMenuClick={HeaderFunction} onTextChange={SearchbarFunction} />

    <section className="app-content">   

      {modelElements}

    </section>
    <div className="overlay"></div>
  </section>
  );
}

export default App;
