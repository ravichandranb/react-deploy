import React from "react";
class SearchNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      search: "",
    };
  }
  callApi = () => {
    fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.search)
      .then((res) => {
        return res.json();
      })
      .then((res) => this.setState({ news: res.hits }))
      .catch((err) => console.log(err));
  };
  handleSearchText = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <h5>Search News</h5>
        <input type="text" onChange={(e) => this.handleSearchText(e)}></input>
        <button onClick={() => this.callApi()}>search for news</button>
        {this.state.news.map((item) => (
          <div>
            <h4>{item.title}</h4>
            <a href={item.url}>Read more</a>
          </div>
        ))}
      </div>
    );
  }
}
export default SearchNews;
