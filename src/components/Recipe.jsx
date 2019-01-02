import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export class Recipe extends Component {
  state = {
    recipe:{}
  }

  componentDidMount(){
    axios.get(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_FF_KEY}&rId=${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      this.setState({ recipe: res.data.recipe });
    })
    .catch(err => console.log(err))
  }
  render() {
    const { recipe } = this.state
    return (
      
        <div className="container recipe_container">
          <div className="row">
              <div className="col-md-6">
                  <div  className="card" style={{width: "34rem"}}>
                       
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {recipe.title}
                                    </h3>
                                    <img style={{height: "18rem"}} className="card-img-top" src={recipe.image_url}  alt={recipe.title}/>
                                    <h5 style={{marginTop:"2rem"}}className="card-subtitle mb-2 text-muted">
                                        Ingredients :
                                    </h5>
                                    <ul class="list-group list-group-flush">
                                        {recipe.ingredients && recipe.ingredients.map(item => {
                                            return <li class="list-group-item">{item}</li>
                                        })}
                                        </ul>
                                </div>
                  </div>
                </div>

              <div className="col-md-6">
                  <div  className="card" style={{width: "34rem"}}>
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {recipe.title}
                                    </h3>
                                        
                                    <p class="card-text"><a href={recipe.publisher_url}>Visit Publisher Site:</a> </p>
                                    <p class="card-text"><a href={recipe.source_url}>Soure copyright</a> </p>
                                    
                                </div>
                  </div>

                      <div  className="card rank_card" style={{width: "34rem"}}>
                            <div className="card-body">
                                <h3 className="card-title">
                                        Rank
                                </h3>
                                <p class="card-text rank">{recipe.social_rank}</p> 
                            </div>
                    </div> 

                    <Link to="/"><button type="button" class="btn btn-primary btn-lg btn-block">Back to Food</button></Link>

                 </div>
               
            </div>
            <hr/>
          </div>
     )
  }
}

export default connect()(Recipe)
