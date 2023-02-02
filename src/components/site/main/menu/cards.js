import { useState } from "react";
import InsertImg from "../../image.js"

function Cards(props){
    const [animationCard, setAnimationCard] = useState(false);
    const title = props.data.title;
    const price = props.data.price;
    const description = props.data.description;
    const sentence = props.data.sentence;
    const src = props.data.src;
    const alt = props.data.alt;
    return(
        <section 
            className={animationCard ? "cardHover": "card"}
            onMouseLeave={() => setAnimationCard(false)}
            onMouseEnter={() => setAnimationCard(true)}
        >
            <div className="titleCard">
                <h3>{title}</h3>&nbsp;&nbsp;&nbsp;
                <div style={{color: "green", fontWeight: "bold", fontSize: "xx-large"}}>{price}</div>
            </div>
            <div className="cardHam">
                <InsertImg src={src} alt={alt} animation={animationCard} />
            </div>
            <div 
                className={!animationCard ? "visibleCardHover": "visibleCard"}
            >
                {description}  
                <b> {sentence}</b>
            </div>
        </section>
    )
}

export default Cards