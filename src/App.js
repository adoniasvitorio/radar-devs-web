import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="lat">Latitude</label>
              <input name="lat" id="lat" required />
            </div>

            <div className="input-block">
              <label htmlFor="long">Longitude</label>
              <input name="long" id="long" required />
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
