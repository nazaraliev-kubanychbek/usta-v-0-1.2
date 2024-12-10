import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

const Gallery = ({ imageList = [] }) => {
  useEffect(() => {
    console.log(imageList);

    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="row">
      {imageList.map((item) => {
       return <div className="col-3">
        <a key={item.id} href={item.image} data-fancybox="gallery">
              <img src={item.image} alt="df" className="detail-page-img" />
        </a>
       </div>;
      })}
    </div>
  );
};

export default Gallery;
