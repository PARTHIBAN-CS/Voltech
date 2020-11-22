import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';
class VoltTextField extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        var {VoltLabel = '' , value = '' , onChange = ()=>{}} = this.props
        return (
            <div>
            <TextField id="standard-basic" label={VoltLabel} value={value}  onChange={onChange}/>
            </div>
        )
    }
}
export default ShpTextField