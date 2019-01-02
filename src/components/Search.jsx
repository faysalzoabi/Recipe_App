import React, { Component } from 'react';
import {fetchData} from '../store/action'
import { connect } from 'react-redux';

class Search extends Component{

 state = {
    recipeName:''
 }  

 findRecipe = (e) => {
     e.preventDefault();
     this.props.dispatch(fetchData(this.state.recipeName))
 }

 hanldeChange = (e) => {
     this.setState({ [e.target.name]: e.target.value  });
 }
 render(){
  return (
    <div class="container" className="form-container" style={{marginBottom:"2rem"}}>
        <div class="row justify-content-center">
            <div class="col-4">
                <form onSubmit={this.findRecipe} class="form-inline">
                    <div class="form-group">
                        <input className="form__input" onChange={this.handleChange} name="recipeName" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Search..."/>
                    </div>
                <button className="form__button" type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    </div>
  )
 }
}

export default connect()(Search)
