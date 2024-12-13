import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

const Gallery = ({ imageList = [] }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="row">
      {imageList.map((item) => {
       return <div key={item.id} className="col-3">
        <a href={item.image} data-fancybox="gallery">
              <img src={item.image} alt="" className="detail-page-img" />
        </a>
       </div>;
      })}
    </div>
  );
};

export default Gallery;
