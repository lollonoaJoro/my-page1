export default function Avatar({ imageUrl, altText }) {
  return (
    <div className="avatar-container">
      <img src={imageUrl} alt={altText} className="avatar-image rounded-full w-12 h-12 object-cover" />
    </div>
  );
}