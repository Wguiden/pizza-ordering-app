import Image from 'next/image'
import React, {useState} from 'react'
import styles from "../../styles/Product.module.css"

const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image alt="" src={pizza.img} objectFit="contain" layout="fill"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image alt="" src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox}/>
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox}/>
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox}/>
                        <label htmlFor="garlic">Spicy Sauce</label>
                    </div>
                </div>

                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Product
