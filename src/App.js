import logo from './logo.svg';
import './App.css';
import play from './play'


function App() {
  return (
    <div className="App">
      <div class="card">
      <div class="card-body">
        <div class="card-title">
          <h1>Data, Anecdotes, or personal beliefs?</h1>
        </div>

        <div class="col-2" style={{ textAlign: 'center'}}>
        <label for="menu1" ><b>Choose option one: </b></label>
        <select class="form-select" name='menu1' id='menu1'>
        <option selected>Open menu</option>
          <option value='data'>Data</option>
          <option value='anecdotes'>Anecdotes</option>
          <option value='personal beliefs'>Personal Beliefs</option>
        </select>
        </div>
          <div class="col-2" style={{ Align: 'center'}}>
          <label for="menu2"><b>Choose option two: </b></label>
        <select class="form-select" name='menu2' id='menu2'>
        <option selected>Open menu</option>
          <option value='data'>Data</option>
          <option value='anecdotes'>Anecdotes</option>
          <option value='personal beliefs'>Personal Beliefs</option>
        </select>
          </div>
        </div>
       

      <div>
      <button type="button" class="btn btn-primary" onClick={play}>Who wins?</button>
      </div>
      <div id='text'>
      </div>
      </div>

      

    </div>
  );
}

export default App;
