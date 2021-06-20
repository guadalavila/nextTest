import React from "react";
import styles from "./styles/plant.module.css";

function Plant() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    Cuidados para unas plantas de interior perfectas
                </h1>
            </div>
            <div className={styles.plantPage}>
                <div>
                    <p className={styles.descriptionText}>
                        Tus plantas de casa. Las que disfrutas con sólo mirarlas
                        y con el tiempo que les dedicas. Hoy te ponemos al día
                        de los cuidados básicos de tus plantas de interior. Esos
                        minutos en los que te ocupas de mimarlas serán más
                        productivos si conoces consejos y tips para disfrutar de
                        su esplendor por más tiempo. Descubre con Interflora
                        algunos trucos y cuidados para mantener siempre frescas
                        tus plantas de casa.
                    </p>
                </div>
                <h3>Plantas de la Semana</h3>
                <div className={styles.containerFlex}>
                    {plants.map((elem) => (
                        <div className={styles.containerPlant} key={elem.name}>
                            <h4>{elem.name}</h4>
                            <div className={styles.containerImage}>
                                <img src={elem.image} height={100} />
                            </div>
                            <p>{elem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Plant;


const plants = [
    {
        name: "Lengua de Suegra",
        description:
            "Una Sansevieria Zeylanica también conocida como Lengua de suegra. Es así por su forma alargada y sus hojas bicolor en forma de espada. Harás bien colocándola en los dormitorios de tu casa porque decora, no ocupa mucho espacio y, sobre todo, porque libera oxígeno por la noche y purifica el ambiente.",
        image: "https://imagenes.elpais.com/resizer/nxqXVGpoSzFjIsnv0XR315kCMB0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YL6YYPAKDQS46CN6YHEP6SE5TQ.jpg",
    },
    {
        name: "Lirio de la Paz",
        description:
            "Spathiphyllum, Espatifilo o, más fácil: Lirio de la Paz. Se trata de una planta que purifica de forma natural y que desprende elegancia. Una de las pocas que, estando en interior, son capaces de florecer durante todo el año.",
        image: "https://imagenes.elpais.com/resizer/PN_ZuW3w1Tj-KMCBl4pImDfRAj0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L76UYHYCLLOQWMJW3Q5ZSAFY5M.jpg",
    },
    {
        name: "Árbol de jade",
        description:
            "La marca de jardinería Gardens4you vende a través de Amazon sus plantas más resistentes: un buen ejemplo, el árbol de jade o Crassuwa Ovata. Se trata de una de las plantas suculentas más conocidas del mundo, con sus hojas carnosas y su forma de pequeño arbolito.",
        image: "https://imagenes.elpais.com/resizer/nsa4g2bIgvuLspUdcVO0SQPlxu0=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MRFJ673F5IBAEYRBYXPGA47KH4.jpg",
    },
];