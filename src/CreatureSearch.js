import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  
  render() {
    return (
      <div className="CreatureSearch">
        <form>

          <input />

          <select>
            <option value="">Sort...</option>
            <option value="name">By Name</option>
            <option value="lives">By Lives</option>
          </select>
          
          <button>🔎</button>
          
        </form>
      </div>
    );
  }
}