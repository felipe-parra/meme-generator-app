import { useEffect, useState } from "react";

interface Props {
  topMessage: string;
  bottomMessage: string;
  image: string;
}

const ImageComponent: React.FC<Props> = ({
  topMessage,
  bottomMessage,
  image
}) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(image);
  }, [image]);
  return (
    <div className="meme" id="meme">
      <p className="text-meme top-text">{topMessage}</p>
      <p className="text-meme bottom-text">{bottomMessage}</p>
      {image ? (
        <img
          src={`/images/${image}.jpg`}
          alt="perrito"
          className="image-meme"
          crossOrigin="anonymous"
        />
      ) : null}
    </div>
  );
};

export default ImageComponent;
