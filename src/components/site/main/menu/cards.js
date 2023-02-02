import InsertImg from "../../image.js"
import * as Images from "../../../assets/images.js"

function Cards(){
    return(
        <section className="card">
            <div className="titleCard">
                <h3>Hamburguesa de guacamole</h3>&nbsp;&nbsp;&nbsp;
                <div style={{color: "green", fontWeight: "bold", fontSize: "xx-large"}}>$85.00</div>
            </div>
            <div className="cardHam">
                <InsertImg src={Images.burgers[0].src} alt={Images.burgers[0].alt} />
            </div>
            <div className="visibleCard">
                Con doble carne a la parrilla, cremoso guacamole, 
                lechuga fresca, rodajas de jalapeño, queso Monterrey,
                tocino y cebollitas crujientes.  
                <b> ¡Un mundo nuevo lleno de sabor!</b>
            </div>
        </section>
    )
}

export default Cards