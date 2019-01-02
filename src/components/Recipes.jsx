import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Recipes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        {this.props.recipes.map(res => {
            return (
                <div key={res.recipe_id} className="col-md-4" style={{marginBottom:"2rem"}}>
                    <div  className="card" style={{width: "23rem"}}>
                        
                        <div className="card-body">
                             <img style={{height: "18rem"}} src={res.image_url} className="card-img-top" alt={res.title}/>
                            <h5 className="card-title">
                            {res.title.length < 20 ? (res.title) : `${res.title.substring(0,25)}...`}
                            
                            </h5>
                            <p className="card-text">Publisher: <span>{res.publisher}</span></p>
                            <Link to={`/recipe/${res.recipe_id}`}><button  class="btn btn-primary">View Recipe</button></Link>
                        </div>
                    </div>

                    {/* <div key={res.recipe_id}>
                        <img src={res.image_url} alt={res.title}/>
                        <p>{res.title}</p>
                    </div> */}
                </div>
            )
        })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        recipes : state.recipes
    }
   
}
export default connect(mapStateToProps)(Recipes)
