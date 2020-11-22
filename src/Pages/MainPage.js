import React , {Component} from 'react'
import Card from '@material-ui/core/Card';
import VoltechLogo from '../../src/VoltechLogo.png';
import AppBars from './AppBars'
import Homepage from './HomePage'
import Aboutpage from './AboutPage'
import Services from './Services'
import Contact from './ContactPage'

class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayedItem : 'Home'
         }
    }
    activeData(data){
       this.setState({
        displayedItem : data
       })
    }
    render() { 

        return (
            <div style ={{width: '100%' , height : '100%'}}>
                <Card>
                    <img style={{width : 300}} src={VoltechLogo}  alt="logo" />
                </Card>
                <AppBars activeData={(data)=>{this.activeData(data)}}/>

                <Card style ={{margin : '3%' , height : '500px' , overflow : 'auto' , overflowX : 'hidden'}}>
                    {
                        this.state.displayedItem == 'Home'? <Homepage/> :
                        this.state.displayedItem == 'About US'? <Aboutpage/>  :
                        this.state.displayedItem == 'Our Services'?  <Services/>  :
                        this.state.displayedItem == 'Contact Us'?   <Contact/>  :
                        <Homepage/>
                    }
                </Card>
            </div>
          );
    }
}
 

export default Mainpage;