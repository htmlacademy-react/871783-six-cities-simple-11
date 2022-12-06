import { MAX_IMAGE_AMOUNT, MIN_IMAGE_AMOUNT } from '../../const';

type GalleryProps ={
  images?: string[] | null;
}

function Gallery({images}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images?.slice(MIN_IMAGE_AMOUNT, MAX_IMAGE_AMOUNT).map((image) => (
            <div className="property__image-wrapper" key={ image }>
              <img className="property__image" src={ image } alt="Photo studio" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Gallery;
