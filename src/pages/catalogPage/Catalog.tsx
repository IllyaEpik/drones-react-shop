import { useState } from "react";
import { ViewProducts } from "../../components/ViewProducts";
import { useCountProduct } from "../../hooks";
import { BETA, SVG } from "../../shared";
import styles from "./Catalog.module.css";

export function Catalog() {
	const categories = [
		{
			img:BETA.drone,
			id:1,
			name:"drone"
		},
		{
			img:BETA.catalog,
			id:2,
			name:"thermal imager"
		}
	]
	const [currentPage, setCurrentPage] = useState(1)

	const [countOfProducts,loading,error,update,categoryId] = useCountProduct("all")

	if (!countOfProducts || loading) return null
	
	const offsetWidth = document.body.clientWidth-49
	const drones = Number.parseInt(String(offsetWidth / 366)) * 4
	const countOfPages = Math.ceil((countOfProducts / drones))
	const pages = Array.from({ length: countOfPages }, (_, i) => i + 1);
	const goToAnotherPage: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		const page = Number(event.currentTarget.textContent)
		setCurrentPage(page)
	}
	const setFilter = (categoryId:number | string) => {
		update(categoryId)
		setCurrentPage(1)
	}
	const changePage = (count:number) => {
		if (currentPage+count > countOfPages) return
		if (currentPage+count < 1) return
		setCurrentPage(currentPage+count)
	}

	return (<div> 
				<h2 className={styles.title}>Каталог</h2>
				<div className={styles.categories}>
					<button 
					className={`${styles.iconDiv} ${categoryId === "all" && styles.currentPage}`}
					type="button"
					onClick={()=>{setFilter("all")}}
					>
						Всі
					</button>

					{categories.map((category)=>{
						return (
						<button 
						key={category.id} 
						className={`${styles.iconDiv} ${categoryId === category.id && styles.currentPage }`} 
						type="button" 
						onClick={()=>{setFilter(category.id)}}
						>
							<img src={category.img} alt="" className={styles.icon}/>
						</button>)
					})}
				</div>
				<ViewProducts count={drones} pages={true} categoryId={categoryId} skip={drones*(currentPage-1)}/>
				<div className={styles.pagesList}>
					<button className={styles.iconDiv} type="button"
					onClick={()=>{changePage(-1)}}>
						<SVG.SkipPreviousFilled  className={`
							${styles.icon} 
							${currentPage === 1 && styles.blocked}
							`}/>
						</button>
					
					{pages.map((page)=>{
						return (
						<button key={page} className={`
							${styles.iconDiv} 
							${currentPage === page && styles.currentPage}
						`} onClick={goToAnotherPage} type="button">
							{page}
						</button>)
					})}
					<button className={styles.iconDiv} type="button"
					onClick={()=>{changePage(1)}}>
						<SVG.SkipNextFilled  className={`
							${styles.icon} 
							${currentPage === countOfPages && styles.blocked}
						`}/>
					</button>
				</div>
			</div>
            )
}

