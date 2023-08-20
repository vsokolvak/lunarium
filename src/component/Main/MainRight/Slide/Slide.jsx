import classes from './Slide.module.scss'
import img1 from '../../../../img/slide/slide1.webp'
import img2 from '../../../../img/slide/slide2.webp'
import img3 from '../../../../img/slide/slide3.webp'
import img4 from '../../../../img/slide/slide4.webp'
import { useEffect, useRef, useState } from 'react'

// жсх розмітка
const Slide = props => {

	// змінні
	let [numberImg, setNumberImg] = useState(0)
	const transform = (numberImg - 1) * -25
	const styleImg = { transform: `translateX(${transform}%)` }

	let interval = useRef()

	// функція встановлює новий номер слайду, 
	// на 1 більший, або повертає 1
	let moveImg = () => {
		setNumberImg(prev => (prev < 4) ? (prev + 1) : 1)
	}

	// при відмалюванні встановлює інтервал зміни слайдів
	useEffect(() => {
		interval.current = setInterval(moveImg, 5000);
		return () => {
			clearInterval(interval.current);
		}
	}, [])

	// функція перемикання слайдів кнопкою
	// очищає старий інтервал, і задає новий, щоб не було різкого переходу
	const changeImg = (e) => {
		clearInterval(interval.current)
		setNumberImg(e.currentTarget.id * 1)
		interval.current = setInterval(moveImg, 5000)
	}

	// масив кнопок
	const buttonArray = []

	// заповнюю масив циклом, щоразу при перемалюванні, добавляється клас актив
	for (let i = 1; i <= 4; i++) {
		buttonArray.push(<button key={i} id={i} onClick={changeImg}
			className={i === numberImg ? classes.active : ''} ></button>)
	}

	return <div className={classes.wrapper}>
			<div className={classes.slideImg}>
				<div className={classes.photoSlide} style={styleImg}>
					<img src={img1} alt="слайд1" />
					<img src={img2} alt="слайд2" />
					<img src={img4} alt="слайд3" />
					<img src={img4} alt="слайд4" />
				</div>

				<div className={classes.buttons}>
					{buttonArray}
				</div>
			</div>
	</div>
}

export default Slide
