const ImageCard = ({ imageUrl, title, onButtonClick, rating }) => {
    return (
        <div className="card-container cursor-pointer" onClick={onButtonClick}>
 <img src={imageUrl} alt={title} className="w-full h-87.5 object-cover rounded-lg"/>
 <div className="flex flex-col gap-1">
  <h3 className="text-lg font-bold truncate">{title}</h3>

  <div className="flex items-center gap-1">
    <span className="text-yellow-400">⭐</span>
    <span className="text-sm font-semibold text-gray-300">{rating ? rating : "평점없음"}</span>
  </div>



 </div>
    </div>
  );
};
  export default ImageCard;