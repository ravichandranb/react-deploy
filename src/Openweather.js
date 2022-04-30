import React from "react";
class Openweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [0, 1, 2],
      test: "",
      apikey: "&appid=07b42137e0d449fce327bfcdc30c62c4",
    };
  }

  callApi = () => {
    console.log(this.state.weather[0]);
    console.log(this.state.test);
    console.log(this.state.apikey);
    fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.test)
      .then((res) => {
        return res.json();
      })
      .then((res) => this.setState({ weather: res.hits }))

      .catch((err) => console.log(err));
  };
  handleSearchText = (event) => {
    console.log(event.target.value);

    this.setState({ test: event.target.value });
  };

  render() {
    return (
      <div>
        <h4>Openweather News</h4>
        <input
          type="text"
          onChange={(event) => this.handleSearchText(event)}
        ></input>
        <button onClick={() => this.callApi()}>Search</button>

        {this.state.weather.map((item) => (
          <div>
            <h6>{item.title}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default Openweather;
