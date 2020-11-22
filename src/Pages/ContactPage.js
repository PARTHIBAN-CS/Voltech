import React , {Component} from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
class Contactpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{marginLeft : '5%'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                           <Card style={{height : '400px'}}>
                            <h3 style={{color : 'green'}} >ADDRESS</h3>
                                <p style={{}}>Voltech Engineers Private Limited</p>
                                <p style={{}}>Voltech Eco Tower,</p>
                                <p style={{}}>No. 2/429, Mount Poonamallee Road,</p>
                                <p style={{}}>Ayyappanthangal, Chennai – 600 056</p>
                                <p style={{}}>Ph : +91- 44- 43978000</p>
                                <p style={{}}>Fax : +91 – 44 - 42867746</p>
                                <p style={{}}>E-mail: voltech@voltechgroup.com</p>
                           </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                           <Card style={{height : '400px'}}>
                            <h3 style={{color : 'green'}}>WORKING HOURS</h3>
                                <p style={{}}>Monday - Saturday 9am to 6.30pm</p>
                                <p style={{}}>Voltech Eco Tower,</p>
                                <h3 style={{color : 'green'}}>OFFICE NETWORKS</h3>
                                <p style={{}}>Indian Offices  </p>
                                <p style={{}}>Global Presence  </p>
                               
                           </Card>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Contactpage;