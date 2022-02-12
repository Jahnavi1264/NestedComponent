import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./CommentBox";

const App = () =>
{
   return( 
     <CommentBox />
   );
};

ReactDom.render(
  <div>
    <CommentBox />
  </div>,
  document.getElementById("root")
);
