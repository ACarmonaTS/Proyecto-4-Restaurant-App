import { useState } from "react";
import InsertImg from "../../image.js"

function Cards(props){
    const [animationCard, setAnimationCard] = useState(false);
    const title = props.data.title;
    const description = props.data.description;
    const src = props.data.src;
    const alt = props.data.alt;
    return(
        <section 
            className={animationCard ? "cardLocationHover": "cardLocation"}
            onMouseLeave={() => setAnimationCard(false)}
            onMouseEnter={() => setAnimationCard(true)}
        >
            <div className="cardLocate"><InsertImg src={src} alt={alt} animation={animationCard} /></div>
            <div>
                <div className="titleCard"><h2>{title}</h2></div>
                <div><h4>{description}</h4></div>  
            </div>
        </section>
    )
}

export default Cards