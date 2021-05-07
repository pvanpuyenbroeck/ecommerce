import ImageElement from './imageboardElement/imageboardElement';
import styles from './imageBoard.module.css'



export default function imageBoard({images}){
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

