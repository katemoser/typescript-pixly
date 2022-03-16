import PixlyApi from "../Api";
/**
 * 
 * props: 
 * 
 * state:
 * 
 * hierarchy:
 * 
 */


 interface PostcardProps {
    demoURL: string
}

 function Postcard({demoURL}: PostcardProps){

    return(
    <div>
        <img src={demoURL} alt="A postcard"/>
    </div>)
}

export default Postcard;