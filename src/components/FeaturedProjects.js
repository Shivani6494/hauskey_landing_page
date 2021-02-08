import React,{Component} from 'react'
import '../App.css'
import FeaturedProject1 from '../assests/Images/FeaturedProject1.jpg';
import FeaturedProject2 from '../assests/Images/FeaturedProject2.jpg';
import FeaturedProject3 from '../assests/Images/FeaturedProject3.jpg';
export default class AboutHaüskey extends Component {
    state={
        Project:[
           {
               image : FeaturedProject1,
           },
           {
            image : FeaturedProject2,
           },
           {
            image : FeaturedProject3,
           }
        ]
    }
    render() {
    return (
        <div className="about-main-featured">
            <div className='about-featured'>
            {this.props.title}
        </div>
        <div className="featured-projects-center">
        {this.state.Project.map((item,index) => {
            
            return <article key={index} className="featured-projects">
                <h4>{item.title}</h4>
                <img src={item.image}/>
                {console.log("item.image",item.image)}
            </article>
        })}   
        </div>
        </div>
    )
    }
}
