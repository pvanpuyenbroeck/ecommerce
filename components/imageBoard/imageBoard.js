import ImageElement from './imageboardElement/imageboardElement';
import styles from './imageBoard.module.css'



export default function imageBoard({images}){
    console.log(images);
    return(
        <div className={styles.imageContainer}>  
            {images.map(image => {
                return(
                    <ImageElement 
                        imageProps={image}
                    />
                )
            })}
            
        </div>
    )
}

