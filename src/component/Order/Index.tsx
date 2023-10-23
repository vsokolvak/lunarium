import React, {useState} from "react";
// @ts-ignore
import classes from './Style.module.scss'
// @ts-ignore
import NovaPost from "./NovaPost/Index.tsx"
// @ts-ignore
import SelectPost from "./SelectPost/Index.tsx"
// @ts-ignore
import ContactData from "./ContactData/Index.tsx"
import axios from "axios"
import {useSelector} from "react-redux";
import UkrPost from "./UkrPost/Index.tsx"
import OrderComplete from "./OrderComplete/Index.tsx"
import loadImg from '../../img/icon/Tilda_Icons_30_System icons/reload.svg'
import { NavLink } from 'react-router-dom'

const Order = () => {

	// дані замовлення зі стейту
	const gods = useSelector(state => state.basket)

	// структура корзини
	//count:1
	//description:"Чашка хамелеон \" Тепло там, де ти \" з принтом"
	//img:"/static/media/hotWithYou.a466863e2a8d5064b1e9.webp"
	//name:"hotWithYou"
	//price:325
	
	// об'єкт з даними з форми
	let [txtMessage, setTxt] = useState({
		firstName: null, //ім'я, приходить із контактформи
		lastName: null, //прізвище, приходить із контактформи
		tel: null, //телефон, приходить із контактформи
		namePost: null, //тип пошти, із селектпошт
		city: null, // рядок пошуку, потрібен для запиту, ігнорувати
		cityCurent: null, //id міста, потрібен для запиту, ігнорувати
		departCurent: null, //адреса відділення
	})

	// функція, створює нтмл текс для листа
	const createHtmlMessage = (date, txtMessage, gods) => {

		let totalPrice = 0
		let godList = ''

		for(let key in gods){
			totalPrice += gods[key].price*gods[key].count
			godList += `товар: ${gods[key].description||'помилка'},
			${gods[key].count} шт по ${gods[key].price||'помилка'} грн 
			сума: ${gods[key].price*gods[key].count||'помилка'} грн
			-----------------------------------------------------------------
			`
		}

		return `замовлення ${date||'помилка'}
		
		ім'я: ${txtMessage.firstName||'не повідомив'}
		Прізвище: ${txtMessage.lastName||'не повідомив'}
		Телефон: ${txtMessage.tel||'не повідомив'}
		Доставка: ${txtMessage.namePost||'не повідомив'}
		Адреса: ${txtMessage.departCurent||'не повідомив'}
		
		замовлений товар:
		
		`+godList+`
		сума замовлення: ${totalPrice} grn`
	}
	
	const createPhotolist = gods => {
	
		let photo = []

		for(let key in gods){photo.push(gods[key].img)}
		
		return photo
	}

	// функція, записує дані, передані з компонент в об'єкт з даними
	const setTxtMessage = (data: any) => {
		setTxt( {...txtMessage, ...data} )
		console.log(txtMessage)
	}

	// пост запит за відправкою листа
	
	const token = '6498439247:AAHVVrG3OUBz3Kx73D1_N2DBTGxOQAlQX7c'
	const chatId = -1001835043763
	const urlAPI = `https://api.telegram.org/bot${ token }/sendMessage`
	const urlAPIphoto = `https://api.telegram.org/bot${ token }/sendPhoto`
	
	const sendMailOrder = (data: any, photo: any) => {
		setshowMessage(true)
		axios.post(urlAPI, {
			chat_id: chatId,
			parse_mod: 'html',
			text: data,
		}).then(function (response) {
			sendImgTelegram()
			setCurentInfo(Sucses)
		}).catch(function (error) {
			setCurentInfo(Error)
		}).finally(function (Error) {
			// виконується завжди
			setTimeout(() => {
				setshowMessage(false)
			}, 5000)
		});
	}
	
	//функція відправлення зображень 
	const sendImgTelegram = () => {
		for(let key in gods){
			let imgAdres = ''
			imgAdres = (window.location.origin + gods[key].img)||''
			axios.post(urlAPIphoto, {
			chat_id: chatId,
			parse_mod: 'html',
			photo: imgAdres,
			})
		}
	}

	// функція, виконує запит на відправку листа
	const sendMail = () => {

		const date = Date()

		const html = createHtmlMessage( date, txtMessage, gods )
		
		const photo = createPhotolist(gods)

		sendMailOrder(html, photo)
	}
	
	// змінна, визначає, який компонент показувати
	let [activeComponent, setactiveComponent] = useState(0)
	
	// масив компонентів
	const componentList = [
		<ContactData setTxtMessage={setTxtMessage} setactiveComponent={setactiveComponent} />,
		<SelectPost setTxtMessage={setTxtMessage} setactiveComponent={setactiveComponent} />,
		<NovaPost setTxtMessage={setTxtMessage} setactiveComponent={setactiveComponent}/>,
		<UkrPost setTxtMessage={setTxtMessage} setactiveComponent={setactiveComponent}/>,
		<OrderComplete data={txtMessage} gods={gods} sendMail={sendMail} setactiveComponent={setactiveComponent} />
	]
	
	// компонента лоад, показувати пока іде запит
	const LoadWrapper = ({component}) =>{

		return <div className={classes.loadWrapper}>
			{component}
		</div>
	}
	
	const Load = <img src={loadImg} alt='load' />
	const Sucses = <span> Замовлення успішно відправлено </span>
	const Error = <span> Помилка, <br /> щось пішло не так, <br /> спробуйте ще раз </span>
	
	let [curentInfo, setCurentInfo] = useState(Load)
	let [showMessage, setshowMessage] = useState(false)
	
	return <div className={classes.wraper}>
				
		{ !showMessage||<LoadWrapper component={curentInfo}/> }
		
		<div className={classes.content}>
		
			<NavLink className={classes.backToSite} to={'/'}>Повернутися на сайт</NavLink>
		
			<h3> Оформлення замовлення </h3>
			
			{componentList[activeComponent]}

			</div>
	</div>
}

export default Order