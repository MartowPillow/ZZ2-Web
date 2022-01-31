import { useState } from 'react';
import './Header.css';

    function Header({onMenuClick, onTextChange}) {

        const [timer, setTimer] = useState(null);
        const [previousText, setPreviousText] = useState(null);

        return (
            <header className="app-header">

                <h1>Sports Cars</h1>
                <nav className="search">
                    <input type="text" className="form-control search-filter" placeholder="Search" onChange={e => {
                    if (previousText !== e.target.value) {
                        clearTimeout(timer);
                        const timeoutId = setTimeout(() => onTextChange(e.target.value), 1000);
                        setTimer(timeoutId);
                        setPreviousText(e.target.value);
                    }
                }} />
                </nav>

            <section className="nav-items">
                <nav className="home">
                    <span>⌂ Home</span>
                </nav>

            <details className="menu-top10">
            <summary>
                <nav>
                    <span>Top 10</span>
                </nav>
            </summary>

            <section>
            <nav className="top10-weight" onClick={() => { onMenuClick("weight"); }}>
                <span>Weight</span>
            </nav>
            <nav className="top10-power" onClick={() => { onMenuClick("power"); }}>
                <span>Power</span>
            </nav>
            <nav className="top10-ratio" onClick={() => { onMenuClick("ratio"); }}>
                <span>Ratio</span>
            </nav>
          </section>
        </details>
      </section>

    </header>

        );
    }

    export default Header;