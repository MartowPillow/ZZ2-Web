import { useState, useEffect } from 'react';
import './App.css';
import Element from './element/Element';

function App() {

  let [data, setData] = useState([]);
  useEffect(() => 
    fetch('http://cabe0232.odns.fr/sportscars-api/exam/api/broadway_shows')
      .then(response => response.json())
      .then(json => {setData(json);
        console.log("1 - afficher les données JSON dans un console.log()");
        console.log(json);})
    ,[]);

  const Sorter = (ElementA, ElementB) => {
    return (ElementA.TicketPrice - ElementB.TicketPrice);
  }

  data = data.sort(Sorter);

  const Moy = (list) => {
    let rep = 0;
    let i = 0;
    list.forEach(number => {
      rep += number;
      i++;
    });
    if (i === 0){
      i=1;
    }
    return (rep/i);
  }

  const PriceList = (ElementList) => {
    let rep = []
    ElementList.forEach(element =>{
      rep.push(element.TicketPrice)
    });
    return rep;
  }

  let PriceMean = Moy(PriceList(data));

  let ElementList = data.map(element => <Element season={element.Season} 
    revenue={element.Revenue} price={element.TicketPrice} mean={PriceMean}
    key={element.Season}
  />);

  return (
    <section>
      <h1>Broadway Shows</h1>  
      <div className="List">{ElementList} </div>
    </section>
  );
}

export default App;
