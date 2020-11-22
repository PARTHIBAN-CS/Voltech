import React , {Component} from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
var Home = [
    {
        Title :   'VEPL INTERNATIONAL' ,
        Description : 'The Voltech Group is a true independent service provider in the Energy sector, and an acclaimed ISO9001-2015 Certified Company in the field of Testing & Commissioning, Engineering, Erections Supervision, Civil Supervision and Maintenance of Power-plants.'   
    },
    {
        Title : 'A GLOBALLY RECOGNIZED AND INTERNATIONALLY CERTIFIED ELECTRICAL TESTING & COMMISSIONING COMPANY.',
        Description : 'The VOLTECH Group is a reputed, experienced and professional Electrical Engineering Company with a proven background in the areas of Testing & Commissioning of medium and heavy-duty Electricals in the Power and Transmission Sector.'
    },
    {   
        Title : 'VEPL DOMESTIC', 
        Description : 'The domestic arm of VEPL is an ISO9001:2015 Certified organization specializing in Testing & Commissioning (T&C) Services. It is the first completely independent Electrical Testing Organization in India of indigenous origin.'
    }]
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{marginLeft : '5%'}}>
              <Grid container spacing={2}>
            {
                Home.map((item , index)=>{
                    return (
                      
                            <Grid item xs={12} sm={4} >
                                 <Card style={{height : '300px' , width : '400px' , marginTop : '20%' }}>
                                     <div style ={{height : '100px' ,color : 'green'}}>
                                     <h4>{item.Title}</h4> 
                                     </div>
                                     <span style={{fontSize : '18px' , margin : '3%'}}>{item.Description}</span>
                                     </Card>
                                
                            </Grid>
                      
                    )
                })
            }
              </Grid>
        </div> );
    }
}
 
export default HomePage;