import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {

      },
      {
        timeout: 30000,
      }
    )
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario Github</label>
            <input name="github_username" id="github_username" value={github_username} required onChange={e => setGithubusername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" value={techs} required onChange={e => setTechs(e.target.value)} />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="lat">Latitude</label>
              <input type="number" name="lat" id="lat" value={latitude} required onChange={e => setLatitude(e.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="long">Longitude</label>
              <input type="number" name="long" id="long" value={longitude} required onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/46370687?v=4" alt="Image Profile" />
              <div className="user-info">
                <strong>Adonias Vitorio</strong>
                <span>React JS, React Native, Node JS</span>
              </div>
            </header>
            <p>Fullstack Developer, passionate about music and tech.</p>
            <a href="https://github.com/adoniasvitorio">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/46370687?v=4" alt="Image Profile" />
              <div className="user-info">
                <strong>Adonias Vitorio</strong>
                <span>React JS, React Native, Node JS</span>
              </div>
            </header>
            <p>Fullstack Developer, passionate about music and tech.</p>
            <a href="https://github.com/adoniasvitorio">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/46370687?v=4" alt="Image Profile" />
              <div className="user-info">
                <strong>Adonias Vitorio</strong>
                <span>React JS, React Native, Node JS</span>
              </div>
            </header>
            <p>Fullstack Developer, passionate about music and tech.</p>
            <a href="https://github.com/adoniasvitorio">Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/46370687?v=4" alt="Image Profile" />
              <div className="user-info">
                <strong>Adonias Vitorio</strong>
                <span>React JS, React Native, Node JS</span>
              </div>
            </header>
            <p>Fullstack Developer, passionate about music and tech.</p>
            <a href="https://github.com/adoniasvitorio">Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
