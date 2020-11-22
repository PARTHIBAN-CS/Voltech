import React , {Component} from 'react';
var menus = [
   { title : 'Home' , color : 'black' } ,
   { title : 'About US' , color : 'white' } ,
   { title : 'Our Services' , color : 'white' } ,
   { title : 'Contact Us' , color : 'white' } ,
   ]
class AppBars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuItem : menus
         }
    }
    render() { 
        return ( 
            <div style={{display : 'flex' , justifyContent : 'space-evenly'  , backgroundColor : 'green' , height : '60px'}}>
                {
                    this.state.menuItem.map((item , index)=>{
                        return (<div style ={{width : '160px' , marginTop : '1%', cursor : 'pointer' }} onClick={()=>{

                            var data = this.state.menuItem 
                            data.map((x,y)=>{
                                if(x.title == item.title){
                                    x.color = 'black'
                                }
                                else{
                                    x.color = 'white'
                                }
                            })
                            this.setState({
                                menuItem : data
                            })


                            this.props.activeData(item.title)
                        }}>
                            <span style={{  color : item.color}}> {item.title}</span>
                        </div>)
                    })
                }
            </div>
         );
    }
}
 
export default AppBars;