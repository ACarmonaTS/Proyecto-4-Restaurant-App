function InsertImg(props) {
  return (
    <img 
      className={!props.animationCard ? "cardHamImg": "cardHamImgHover"}
      src={props.src}
      alt={props.alt}
      />
  );
}

export default InsertImg;