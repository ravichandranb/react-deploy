import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
    };
  }
  /* fetch() will return two objects. 
  They are res (also known as resolve), 
  and rej(also known as reject). 
  These are known as PROMISES.*/

  /*componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((res) => this.setState({ result: res }))
      .catch((err) => console.log(err));
  }*/

  callAPI = () => {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=" + this.state.search)
      .then((res) => this.setState({ result: res.data.hits }))
      .catch((err) => console.log(err));
  };
  handleSearchText = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>NewsApp</h1>
        <input type="text" onChange={(e) => this.handleSearchText(e)}></input>
        <button onClick={() => this.callAPI()}>search for news</button>
        {this.state.result.map((item, key) => (
          <div key={item.url}>
            <h4>{item.title}</h4>
            <a href={item.url}>Read More</a>
            <hr></hr>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsApp;
