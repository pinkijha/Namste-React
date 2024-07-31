import React from "react";
class ContactFormClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: 'shailesh',
                location: 'bihar',
                avatar_url: 'https//dummy.photo',

            }
         };
        //  console.log("constructor");
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/pinkijha");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
        // console.log("didMount")
        this.timer = setInterval(()=>{
            console.log("hello")
        },1000)

    }

    componentDidUpdate(){
        console.log("did update")

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){       
        const {id, login, avatar_url} = this.state.userInfo;
        return(            
            <div>

            <div>
                <h1>Id: {id}</h1>
                <h1>Name: {login}</h1>
                <img src={avatar_url}></img>
                {/* <h4>{location}</h4> */}
                
               

            </div>                
                {/* Subject:
                    <textarea
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: '150px' }}
                    /> */}

            </div>
            
        )
        
    }
}

export default ContactFormClass;    