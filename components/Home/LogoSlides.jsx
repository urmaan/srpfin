import Marquee from "react-fast-marquee";


const LogoSlides = () => {
    const images = [
       "coingecko.png","coinmarketcap.png", "coinsniper.png"
    ];
    return (
       
           <div className="flex bg-white justify-center"
>
<Marquee>
   {
        images.map(img =>(
            <img src={"/img/exLogos/"+img} 
            key={img}
            className="mx-10"
            style={{maxHeight:"100px"}}
            alt="" />
        ))
    }
 </Marquee>
</div>
       
    );
}
 
export default LogoSlides;