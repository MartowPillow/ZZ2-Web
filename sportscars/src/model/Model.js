
    import './Model.css';
    import Car from './car/Car';

    

    function Model({name, brand, cars}) {

      const carElements = cars.map(cars => <Car name={cars.name} year={cars.year} power={cars.power} weight={cars.weight} key={cars.id}/>);

        return (
            <article className="model-content">
              
                <h3><span className="brand">{brand}</span>&nbsp;<span className="model">{name}</span></h3>
                <a className="image-link">
                  <img className="image" src= {cars[0].imageUrl} />
                </a>
              
                {carElements}
              
              </article>
        );
    }

    export default Model;