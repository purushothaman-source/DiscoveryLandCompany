import React from 'react';
import Appbar from '../Appbar/Appbar'
import Footer from '../footer/footer'
import image from '../../Assets/Mountain.jpg'
import community from '../../Assets/community.jpg'
import './contacts.css'


export default class Contacts extends React.Component {
    constructor(){
        super();
        this.state ={
            result:""
        }
    }
    componentDidMount() {
        document.getElementById("option").addEventListener("change",this.result);
      }
      result=()=>{
        var option =document.getElementById("option")
       console.log(option.value);
        this.setState({result:option.value})
      }

    render() {
        
        return (
            <>
                <div className="img">
                    <div className="appcont"><Appbar /></div>

                    <img src={image} />
                    <div className="find">
                        Find your Own World</div>

                <div className="content">

                    Take the First step towards discovering your perfect world .Select a community
                    and speak to one of our advisors who are here to make the incredible happen
                    </div>
                    </div>

                <div className="community">
                <img src={community} alt="" srcset=""/>
                <div className="dropbox">
                    Select a community
                    <div className="option">
                    <select name="option" id="option">
                        <option selected  disabled>select</option>
                        <option value="Chileno Bay" >Chileno Bay</option>
                        <option value="DriftWood">DriftWood</option>
                        <option   value="James Island">James Island</option>
                        <option value="MountainTop">MountainTop</option>
                    </select>
                    </div>
                    <div className="result">
                    {this.state.result}
                    
                   { (this.state.result==="Chileno Bay") ? <p>KM 15,Transpeninsular Highway,Cabo san Lucus,Bcs,Mexico 23410
                  <a href="mailto:info@chilenobayclub.com"> info@chilenobayclub.com</a>
                   </p> : null}   
                   { (this.state.result==="DriftWood") ? <p>pM 15,Transpeninsular Highway,Cabo san Lucus,Bcs,Mexico 23410
                  <a href="mailto:info@chilenobayclub.com"> info@driftwoodclub.com</a>
                   </p> : null}   
                   { (this.state.result==="James Island") ? <p>pM 15,Transpeninsular Highway,Cabo san Lucus,Bcs,Mexico 23410
                  <a href="mailto:info@chilenobayclub.com"> info@jamesIslamdclub.com</a>
                   </p> : null}   { (this.state.result==="MountainTop") ? <p>pM 15,Transpeninsular Highway,Cabo san Lucus,Bcs,Mexico 23410
                  <a href="mailto:info@chilenobayclub.com"> info@mountaintopclub.com</a>
                   </p> : null}   
                    

                    </div>
                </div>
                </div>
            <Footer/> 
            </>
        )
    }
}
