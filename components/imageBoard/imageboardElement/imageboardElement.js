import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './imageboardElement.module.css'


 const imageboardElement = ({imageProps}) => {
    console.log(imageProps);
    return(
        <Link href={imageProps.params.id}>
        <div className={styles.picture}>
            <Image
                src={'/img/furniture/' + imageProps.params.imgsrc}
                alt={imageProps.params.description}
                layout='fill'
                objectFit='cover'
                quality='50'
            />
            <div className={styles.description}>
                <div>{imageProps.params.name}</div>
            </div>
        </div>
        </Link>
    )
}

export default imageboardElement;