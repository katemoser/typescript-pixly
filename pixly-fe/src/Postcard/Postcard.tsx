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
 function Postcard(){
    const imgURL = await PixlyApi.getDemoPostcard();

    return(
    <div>
        <img src={imgURL} alt="A postcard"/>
    </div>)
}

export default Postcard;