import React,{Component} from 'react'
import { connect } from "react-redux";
import List from "../components/List";
import Form from "../components/Form";
// let articles = [
//     {title : "Malcom", id: "Reynolds",dummy:'12345'},
//     {title : "Kaylee", id: "Frye",dummy:'12345'},
//     {title : "Jayne", id: "Cobb",dummy:'12345'}
//   ];
class BaseContainer extends Component{
    constructor(){
        super()   
    } 
    
    render(){
        let articles=this.props.articles
       
        return(
            <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            
            <List {...this.props}/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form  {...this.props}/>
        </div>
    </div>
        )
    }

}
const mapStateToProps = state => {
    console.log(state)
    return { articles: state.articles};
};
const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);