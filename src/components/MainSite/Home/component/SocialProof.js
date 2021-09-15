import React from "react";
import { Images } from "./ProofImages";

const SocialProof = () => {
    return(
        <>
        <div className="section-images-proof">
            {
                Images.map((image) => {
                    const {id, img, styleImage} = image
                    return(
                        <div key={image.id} className={image.styleImage}>
                            <img src={image.img}/>
                        </div>
                    );
                })}
        </div>
        </>
    )
}

export default SocialProof;