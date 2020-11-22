import React , {Component} from 'react' 
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
var services = ['Voltech Engineers Pvt. Ltd.' , 'Voltech O And M Services Pvt Ltd' , 'Voltech HR Services' , 'Asia Power Electrical LLP']

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{marginLeft :'13%'}}>
               <Grid container spacing={2}>
            {
                services.map((item , index)=>{
                    return (
                        <Grid item xs={12} sm={6} >
                            <div className = 'dot'> 
                               <p style={{paddingTop :'100px' , marginLeft : '1%'}}> {
                                   item 
                                }
                                </p>
                             </div>
                        </Grid>
                     
                    )
                })
            }
            </Grid>
        </div>
          );
    }
}
 
export default Services;