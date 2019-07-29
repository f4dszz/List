import React from "react";
import "../App.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   article: null
    // };
    this.props.params.article.toString = function(){
      return JSON.stringify(this);
    }
  }

  render() {

    return (
      <div className="app">
        {`this is article ${JSON.stringify(this.props.params.article)}`}
      </div>
    );
  }
}

export default Details;
