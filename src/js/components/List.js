import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
console.log("list")
// Get state from store to props
// const mapStateToProps = state => {
//     console.log(state)
//     return { articles: state.articles};
// };

// const ConnectedList = ({articles}) => (
//     <ul className="list-group list-group-flush">
//         {articles.map(el => (
//             <li className="list-group-item" key={el.id}>
//                 {el.id}
//                 {el.title}
//                 {el.dummy}
//             </li>
            
//         ))}
//     </ul>
// );

// // Wire it up together, check types and export
// const List = connect(mapStateToProps)(ConnectedList);

// ConnectedList.propTypes = {
//     articles: PropTypes.array.isRequired
// };
// let articles = [
//     {title : "Malcom", id: "Reynolds",dummy:'12345'},
//     {title : "Kaylee", id: "Frye",dummy:'12345'},
//     {title : "Jayne", id: "Cobb",dummy:'12345'}
//   ];


function List(props){
  console.log(props.articles)
    let articles = props.articles;
    return(
        <ul className="list-group list-group-flush">
         {articles.map(el => (
           <li className="list-group-item" key={el.id}>
               {el.id}
                {el.title}
                {el.dummy}
            </li>
            
         ))}
        </ul>

    )
} 

export default List;