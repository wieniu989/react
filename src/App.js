import './App.css';
import Data from"./dane.json";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div className="case">
        <div className="phone">
          <div className="grid-container">
            <div className="item1">
              <div id="clock" className="time"></div>
                   <div className="camera">
                       <div className="cam"></div>
                    </div>
                    <div className="battery">30%</div>
             </div>
             <div className="item3">
               <div className="displaybox">
                <table>
                  <tr>
                    <th>ID</th>
                    <th>IMIE</th>
                    <th>NAZWISKO</th>
                    <th>ADRES</th>
                    <th>MIEJSCOWOSC</th>
                  </tr>
                  {Data.map(post=>{
                    return(
                      <>
                      <tr className="tabela">
                        <td>{post.id}</td>
                        <td>{post.imie}</td>
                        <td>{post.nazwisko}</td>
                        <td>{post.adres}</td>
                        <td>{post.miasto}</td>
                      </tr>
                      </>
                    )
                  })
                  }
                </table>
               </div>
               <div className="grid-box">
                  <a className="button"><div className="placeholder">1</div></a>
                  <a className="button"><div className="placeholder">2</div></a>
                  <a className="button"><div className="placeholder">3</div></a>
                  <a className="button"><div className="placeholder">4</div></a>
               </div>
             </div>
             <div className="item4 ">
                  <div className="home">
                      <a href="index.html">
                          <div className="guzik"></div>
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </header>
  </div>
  );
}

export default App;
