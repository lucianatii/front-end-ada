import React from "react";
import "../Article/styles.css";

export class Article extends React.Component {
render(){
  return(
  <article id="article">
      <img src={this.props.thumbnail} alt={this.props.description} />
      <div className="articleInfos">
        <h2>{this.props.title}</h2>
        <h3>{this.props.provider}</h3>

        <p>{this.props.description}</p>
      </div>
    </article>
  )
}
}

