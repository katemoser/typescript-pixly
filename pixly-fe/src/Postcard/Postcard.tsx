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
    demoURL: { url: string}
}

 function Postcard({demoURL}: PostcardProps){
     console.log("IN POSTCARD, demoURL:", demoURL.url);

    return(
    <div>
        <img src={demoURL.url} alt="A postcard"/>
    </div>)
}

export default Postcard;