import React from "react";
import { plants } from "./mock";
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
                        <div className={styles.containerPlant}>
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
