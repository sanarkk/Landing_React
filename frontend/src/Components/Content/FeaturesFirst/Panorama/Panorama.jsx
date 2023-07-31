import React from "react";
import css from "./Panorama.module.css";
import PanoramaImage from '../../../../Images/description_pano_1.png'
import MediaPanoramaImage from '../../../../Images/landing_pano_1.png'


const Panorama = () => {
  return (
    <div className={css.features_panorama_row}>
      <div className={css.features_panorama_text}>
        <div className={css.features_panorama_title + ' ' + css.title}>
          <p>One simple shortcut</p>
        </div>
        <div className={css.features_panorama_description + ' ' + css.description}>
          <p>
            No more 100s of apps, no more
            <br />
            folders, no more mental overload.
          </p>
        </div>
      </div>
      <div className={css.features_panorama_image}>
        <picture>
          <source
            media="(max-width: 992px)"
            srcset={MediaPanoramaImage}
          />
          <img src={PanoramaImage} alt=""/>
        </picture>
      </div>
    </div>
  );
};

export default Panorama;
