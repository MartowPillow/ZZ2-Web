    import './Car.css';

    function Car({weight, power, year, name, }) {

      const WEIGHT_MAX = 2500;
      const POWER_MAX = 1000;
      const RATIO_MAX = 10;

      const calculStyle = (val, val_max) => {
          return ({width:(100*val/val_max)+'%'});
      }
      const ratio = (weight/power).toFixed(2);

        return (
            <section className="car-content">
                  <details className="car-details">
                    <summary className="car-summary">
                      <span className="car">{name}</span>&nbsp;-&nbsp;<span className="year">{year}</span>
                    </summary>
                    <section className="bars">
                      <div className="bar-title"><label>Weight</label><span><span className="weight">{weight}</span>kg</span></div>
                      <div className="bar bar-weight" style={calculStyle(weight,WEIGHT_MAX)}></div>
                      <div className="bar-title"><label>Power</label><span><span className="power">{power}</span>hp</span></div>
                      <div className="bar bar-power" style={calculStyle(power,POWER_MAX)}></div>
                      <div className="bar-title"><label>Ratio</label><span><span className="ratio">{ratio}</span>kg/hp</span></div>
                      <div className="bar bar-ratio" style={calculStyle(ratio,RATIO_MAX)}></div>
                    </section>
                  </details>
                </section>
        );
    }

    export default Car;