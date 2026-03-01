// import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { ViewProducts } from "../../components/ViewProducts";
import { HeaderContext, useBasketContext } from "../../context";
import { useIdProduct } from "../../hooks/useIdProduct";
import { Button } from "../../shared";
import { BETA, SVG } from "../../shared";
import styles from "./Product.module.css";

export function Product(){
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
    const {id} = useParams<{ id: string }>()
    console.log(id,useParams<{ id: string }>())
    const [product, loading, error] = useIdProduct(Number(id))
    const {addProduct} = useBasketContext()
    const headerContext = useContext(HeaderContext)

    useEffect(() => {
        if (!headerContext || !product || loading) return
        headerContext.setHeaderText((
            <>
                <span>{product.name}</span>
                <span className={styles.topDescription}>{product.description}</span>
            </>
        ))
    },[loading])
    if (!product) return null
    return (
        <div>
            <section className={styles.hero}>
                <img src={product.img} alt="" className={`${styles.drone} ${isTabletOrMobile && styles.phoneDrone}`} />
                <div className={`${styles.sideInfo} ${isTabletOrMobile && styles.phoneSideInfo}`}>
                    <div className={styles.previewSideInfo}>
                        <img src={product.img} alt="" className={styles.miniDrone} />
                        <div className={styles.textSideInfo}>
                            <span className={styles.titleSideInfo}>{product.name}</span>
                            <span className={styles.priceSideInfo}>{product.price}₴</span>
                        </div>
                    </div>
                    <div className={styles.innerSideInfo}>
                        <SVG.Order 
                            className={styles.addProductButton}
                            onClick={() => addProduct(product.id)}
                        />
                        <Button to="makeOrder/" img={true} black={true}>Замовити</Button>
                    </div>
                </div>
            </section>
            <div className={styles.imageBlock}>

                <div className={styles.verticalBlock}>
                    <div className={styles.textVerticalBlock}>
                        <h2 className={styles.titleBlock}>Володійте кожним кутом</h2>
                        <p className={styles.description}>
                            Представляємо вдосконалену систему з трьома камерами, де кожен об'єктив має свої переваги, створюючи виняткові зображення - від широких ширококутних пейзажів до детальних телефото-знімків крупним планом. Усі три камери оснащені функцією Dual Native ISO Fusion, яка бездоганно поєднує переваги високих і низьких значень ISO для захоплення приголомшливих деталей, яких неможливо досягти за допомогою традиційних рішень. 
                        </p>
                        <p className={styles.description}>
                            Крім того, ви можете розкрити свій творчий потенціал завдяки можливості створення знімків у форматі RAW з високою роздільною здатністю (до 5 кадрів), а також таким функціям, як «Вільні панорами» та «Фокусування на об'єкті», які доступні на всіх камерах.
                        </p>
                    </div>
                    <img src={BETA.video} alt="" className={styles.mainImage} />
                </div>
                <div className={styles.block}>
                    <div>
                        <h2 className={styles.titleBlock}>Основна камера 4/3 CMOS Hasselblad Hasselblad</h2>
                        <p className={styles.description}>У ретельно розробленій 4/3 CMOS-камері Hasselblad використовується абсолютно новий 100-мегапіксельний сенсор і відома технологія Hasselblad Natural Color Solution (HNCS), що забезпечує виняткову точність передачі кольору. 

                            Вона створює захоплюючі 100-мегапіксельні зображення з високою деталізацією та чіткістю, пропонуючи безпрецедентну гнучкість у пост-обробці. Конструкція об'єктива була перероблена відповідно до вимог 100-мегапіксельної матриці, що забезпечує неймовірну різкість.</p>
                    </div>
                    <img src={BETA.block2} alt="" />
                </div>

                <div className={styles.block}>
                    <img src={BETA.block3} alt="" />
                    <div>
                        <h2 className={styles.titleBlock}>51-хв час польоту</h2>
                        <p className={styles.description}>Аеродинамічний дизайн Mavic 4 Pro, ефективна силова установка та акумуляторна батарея ємністю 95 Вт-год забезпечують тривалість польоту до 51 хвилини, максимальну швидкість до 90 км/год та дальність польоту до 41 км (25,4 милі) [2]. 

                            Незалежно від того, чи ви розвідуєте місцевість, відпрацьовуєте маневри, робите затримки в часі або панорамні фото за допомогою телеоб'єктива, достатня тривалість польоту дозволяє вам діяти легко і впевнено.</p>
                    </div>
                </div>
                <div className={styles.block}>

                </div>
                <div className={styles.verticalBlock}>
                    <div className={styles.textVerticalBlock}>
                        <h2 className={styles.titleBlock}>До 512 ГБ вбудованої пам'яті</h2>
                        <p className={styles.description}>
                            Стандартна версія DJI Mavic 4 Pro поставляється з 64 ГБ вбудованої пам'яті [14], тому ви можете відразу ж почати зйомку без зовнішньої карти пам'яті. Mavic 4 Pro 512GB в комплектації Creator Combo має 512 ГБ високошвидкісної вбудованої пам'яті [15],
                        </p>
                    </div>
                    <div className={`${styles.stats} ${isTabletOrMobile && styles.phoneStats}`}>
                        <div className={styles.stat}>
                            <strong>ALL-I 4:2:2</strong>
                            <span>Кодування</span>
                        </div>
                        <div className={styles.stat}>
                            <strong>512 <span>GB</span> </strong>
                            <span>UFS Сховище</span>
                        </div>
                        <div className={styles.stat}>
                            <strong>64 <span>GB</span></strong>
                            <span>eMMC Storage</span>
                        </div>
                    </div>
                    <img src={BETA.block4} alt=""  className={styles.mainImage}/>
                </div>
                
            </div>
            <h1 className={styles.title}>СХОЖІ ТОВАРИ</h1>
            <ViewProducts count={4} pages={false}></ViewProducts>
        </div>
    )
}