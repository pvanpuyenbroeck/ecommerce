import React from 'react';
import Image from "next/image";


 const imageboardElement = (props) => {

    return(
        <div>
            <Image
                src={props.imageSource}
                alt={props.imageDesc}
            />
        </div>
    )
}

export default imageboardElement;