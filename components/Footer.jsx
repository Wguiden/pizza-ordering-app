import Image from 'next/image'
import React from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Don Road #304
                        <br/> NewYork, 85022
                        <br/> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        4624 R. Cson Road #120
                        <br/> NewYork, 85022
                        <br/> (602) 867-1011
                    </p>
                    <p className={styles.text}>
                        9653 R. Dan Road #300
                        <br/> NewYork, 85022
                        <br/> (602) 867-1012
                    </p>
                    <p className={styles.text}>
                        1254 R. Tin Road #604
                        <br/> NewYork, 85022
                        <br/> (602) 867-1013
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br/> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
