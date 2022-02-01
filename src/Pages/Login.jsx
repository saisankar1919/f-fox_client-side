import Background from '../images/blog_banner.jpg';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function Login(){
    return(
        <div className=" " style={{backgroundImage: `url(${Background})`, backgroundSize:'100%'}} >
    <div className="container h-screen flex justify-center items-center">
        <div className="p-8 bg-black justify-center item-center bg-opacity-50 rounded-lg max-w-6xl pb-10">
            <div className="flex justify-center mb-4"> 
                {/* <img src="images\blog_banner.jpg" width="70"/> */}
                <h4 style={{fontFamily:'cursive', fontWeight:'bolder', color:'#4fd1c5', fontSize:'40px'}}>f Fox</h4> 
            </div> 
                <input type="text" className="h-12 rounded bg-gray-500 bg-opacity-50 w-full text-white  px-3 focus:text-white" placeholder="Email"/> 
                <input type="text" className="h-12 mt-3 bg-gray-500 bg-opacity-50 rounded w-full px-3 focus:text-white" placeholder="Password"/>
                
                {/* <TextField id="userName"
                inputProps={{ style: { fontFamily: 'cursive', color: 'white'}}} 
                label="User name" variant="outlined"/>
                <TextField id="password"
                inputProps={{ style: { fontFamily: 'cursive', color: 'white', marginLeft:'20px  '}}} 
                label="password" variant="outlined"/> */}
                
                
            <div className="flex justify-end items-center mt-2"> 
                <a href="#" className="text-gray-400 hover:text-gray-600">Forgot password?</a> 
            </div> 
                <button className="uppercase h-12 mt-3 text-white w-full rounded bg-teal-500 hover:bg-teal-600">login</button>
                <div className=" mt-10"> 
                <p href="#" className="text-gray-400">Didn't have an account?<a href=""><span style={{color:'white'}}>Signup</span></a></p> 
            </div>
            {/* <div className="flex justify-between items-center mt-3">
                <hr className="w-full"/> <span className="p-2 text-gray-400 mb-1">OR</span>
                <hr className="w-full"/>
            </div> <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"><i className="fa fa-facebook mr-2"></i>Facebook</button> <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900"><i className="fa fa-google mr-2"></i>Google</button> */}
        </div>
    </div>
</div>
    )
}
export default Login;