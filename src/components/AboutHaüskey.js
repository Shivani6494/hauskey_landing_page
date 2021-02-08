import React,{Component} from 'react'
import '../App.css'
import { FaUsers, FaMobileAlt ,FaConciergeBell, FaMoneyBillAlt} from 'react-icons/fa'; 
export default class AboutHaüskey extends Component {
    state={
        About:[
            {
                icon:<FaMoneyBillAlt className='faicon'/>,
                title:"CASH BACK",
               info:'Earn thousands in Haüskey Cash Back Rebates when you purchase a pre-construction property on our platform.'
            },
            {
               icon:<FaMobileAlt className='faicon'/>,
               title:"EXCLUSIVE ACCESS",
              info:'Search our marketplace for access to all pre-construction units and leading projects in the GTHA.'
           },
           {
               icon:<FaConciergeBell className='faicon'/>,
               title:"CONCIERGE SERVICE",
              info:'Instantly connect to our concierge service and a licensed sales representative can assist you in locking down a deal.'
           },
           {
               icon:<FaUsers className='faicon'/>,
               title:"EXPERIENCED TEAM",
              info:'Haüskey Realty Brokers have over of 30 years of real estate experience and are excited to get you, our client, the best return on your investment!'
           }
        ]
    }
    render() {
    return (
        <div className="about-main">
        <div className='about-hauskey'>
            {this.props.title}
        </div>
    <div className="about-center">
    {this.state.About.map((item,index) => {
            return <article key={index} className="about">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p className="item-info">{item.info}</p>
            </article>
        })}   
                    </div>
    </div>
    )
    }
}
