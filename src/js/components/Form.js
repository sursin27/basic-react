import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import PropTypes from "prop-types";
import { addArticle } from "../actions/index";
console.log("form")
// Dispatch action to add to store
const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

// Form component
class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("ssave")        
        const { title } = this.state;
        const id = uuidv1(); 
        const dummy = 23;         
        this.props.addArticle({ 
            title, 
            id,
            dummy
        });
        this.setState({
            title: ""
        })
    }
    handleSubmit1(e) {
        e.preventDefault();
        console.log("submit")        
        const { title } = this.state;
         const id = uuidv1();    
         const dummy = 23;    
        this.props.addArticle({ 
            title, 
            id,
            dummy
        });
        this.setState({
            title: ""
        })
    }
    
    


    render() {
        const { title } = this.state;
        return (
            
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                
                <button type="submit" className="btn btn-success btn-lg" onClick={this.handleSubmit}>
                    SAVE
        </button>
        <button type="submit" className="btn btn-success btn-lg" onClick={this.handleSubmit1}>
                    delete
        </button>
        </div>
           
        );
    }
}

// Wire it up together and export
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

// Check var types using propTypes
ConnectedForm.propTypes = {
    addArticle: PropTypes.func.isRequired
};

export default Form;