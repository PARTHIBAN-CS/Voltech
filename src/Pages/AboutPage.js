import React , {Component} from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

var about = [
    {
        Title : 'Managing Director' ,
        Name : 'M.Umapathi',
        Pos : 'Chairman & Managing Director - VOLTECHGROUP',
        Des : 'At a time when even thinking about starting an industry was difficult in India; to have actually started it, hailing from a middle class family without any economic background or support, and to have successfully established the company that boasts of cutting-edge technology and technical expertise, and taking it to national and international levels in a span of just 21 years is a great achievement unparalleled in post-liberalized India.'
    }
    ,
    {
        Title : 'Board of Director' ,
        team : [
            {
                Name : 'Mrs.U.Kalaivani ' ,
                Pos : 'Director, Voltech Engineers Private Limited'
            },
            {
                Name : 'Mrs.U.Devii ' ,
                Pos : 'Director, Voltech Global Trading Private Limited'
            },
            {
                Name : 'K.Rajendra Prasad ' ,
                Pos : 'Technical Director, Voltech Engineers Private Limited'
            },
            {
                Name : 'Mr.P.Raveenthiran ' ,
                Pos : 'Director, Voltech Manufacturing Company Limited'
            },
            {
                Name : 'Mr.T.Murugan ' ,
                Pos : 'Director, Voltech Manufacturing Company Limited'
            },
            {
                Name : 'Mr.S.Manikandan' ,
                Pos : 'Director, Voltech O and M Services Private Limited '
            },
            {
                Name : 'Mrs.A.Annapoorani ' ,
                Pos : 'Director, Asia Power Electrical LLP'
            },
            {
                Name : 'Mr.Vasudeva Comandur ' ,
                Pos : 'CEO &Director, NLP Labs'
            },
        ]
       
    },
    {
        
            Title : 'Business Executives' ,
            team : [
                {
                    Name : ' Mr. R.Swaminathan ' ,
                    Pos : 'Chief Advisor - Board'
                },
                {
                    Name : 'Mr. P.Sankaran ' ,
                    Pos : 'Chief Advisor - Board'
                },
                {
                    Name : 'Mr.P.Raveenthiran ' ,
                    Pos : 'Chief Advisor - Board'
                },
                {
                    Name : 'Mr. T.Hariraj ' ,
                    Pos : ' Chief Executive Officer - Voltech Manufacturing Company Limited'
                },
                {
                    Name : 'Mr. S.Arumugavelan ' ,
                    Pos : 'Executive Director - Finance'
                },
                {
                    Name : 'Mr. TN Balu' ,
                    Pos : 'Executive Director - Revenue '
                },
                {
                    Name : 'Mr. R.Sundar ' ,
                    Pos : 'Executive Director - Voltech Global Trading Private Limited'
                },
                {
                    Name : 'Mr. K.Punniyakotti  ' ,
                    Pos : 'Executive Director - Voltech Manufacturing Company Limited'
                },
            ]
           
        

    }
]
class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{marginLeft : '5%'}}>
              <Grid container spacing={2}>
            {
                about.map((item , index)=>{
                    return (
                      
                            <Grid item xs={12} sm={4} >
                                 <Card style={{height : '300px' , width : '400px' , marginTop : '20%' , overflowY : 'auto' }}>
                                        <div style ={{height : '20px' ,color : 'green'}}>
                                         <h4>{item.Title}</h4> 
                                         </div>
                                     {
                                         index == 0 ? <React.Fragment> 
                                         <div style ={{color : 'green'}}>
                                         <h5>{item.Name}</h5> 
                                         </div>
                                         <div style ={{color : 'gray'}}>
                                         <h6>{item.Pos}</h6> 
                                         </div>
                                         <span style={{fontSize : '14px' , margin : '3%'}}>{item.Des}</span></React.Fragment> : 
                                         <React.Fragment >
                                             {
                                                 item.team.map((items , indexes)=>{
                                                     return (
                                                         <div >
                                                             <div style ={{color : 'green'}}>
                                                                <h5>{items.Name}</h5> 
                                                            </div>
                                                            <div style ={{color : 'gray'}}>
                                                                <h6>{items.Pos}</h6> 
                                                            </div>
                                                        </div>
                                                     )
                                                 })
                                             }
                                         </React.Fragment>

                                     }
                                       
                                    </Card>
                                
                            </Grid>
                      
                    )
                })
            }
              </Grid>
        </div> 
         );
    }
}
 
export default AboutPage;