import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
    state = {
      nameSearch: '',
      sortField: ''
    }

    handleNameChange = ({ target }) => {
      this.setState({ nameSearch: target.value });
    }

    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
      console.log(this.state);
    }
  
    render() {
      const { nameSearch, sortField } = this.state;
      return (
        <form className="CreatureSearch" onSubmit={this.handleSubmit}>

          <input 
            name="nameSearch"
            value={nameSearch}
            onChange={this.handleNameChange}
          />

          <select
            name="sortField"
            value={sortField}  
            onChange={this.handleSortField}
          >
            <option value="">Sort...</option>
            <option value="name">By Name</option>
            <option value="lives">By Lives</option>
          </select>
        
          <button>🔎</button>
        
        </form>
      );
    }
}