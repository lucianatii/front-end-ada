import React from "react";
import "../Article/styles.css";

// export class Article extends React.Component 
export function Article ({/*props*/ thumbnail, description, title, provider}){
// render(){
  return(
  <article id="article">
    {/* Em componentes funcionais não se usa "this.", apenas "props" */}
      <img src={/*props.*/ thumbnail} alt={ /*props.*/description} />
      <div className="articleInfos">
        <h2>{/*props.*/ title}</h2>
        <h3>{/*props.*/ provider}</h3>

        <p>{/*props.*/ description}</p>
      </div>
    </article>
  )
}


