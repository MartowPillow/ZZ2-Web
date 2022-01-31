import { useState, useEffect } from 'react';
import Header from './header/Header';
import Model from './model/Model';
import './App.css';
//import data from './TD4.js';

function App() {

  let [models, setModels] = useState([]);
  const [menuClicked, setMenuClicked] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const queryString = (menu, text) => {
    return `${menu?'sort='+menu:''}${text?'&search='+text:''}`;
  };

  const top10Menu = menu => {
    setMenuClicked(menu);
  }

  const search = text => {
    setSearchText(text);
  }


  const modelElements = models
    .flatMap(brand => brand.models.map(model => ({ ...model, brandName: brand.name })))
    .map(model => <Model key={model.id} name={model.name} brandName={model.brandName} cars={model.cars} />);


  useEffect(() => { 
    fetch('http://cabe0232.odns.fr/sportscars-api?' + queryString(menuClicked, searchText))
                                .then(res => res.json())
                                .then(json => setModels(json));
  }, [menuClicked, searchText]);

  return (

    <section className="app-container">

      <Header searchChange={search} menuClick={top10Menu} />

      <section className="app-content">
        {modelElements}
      </section>

      <div className="overlay"></div>

    </section>

  );
}

export default App;
