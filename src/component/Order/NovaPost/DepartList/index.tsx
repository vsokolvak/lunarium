
import classes from './Style.module.scss'
import {SubmitHandler, useForm } from "react-hook-form"
import React, {useState, useEffect} from "react";
import axios from "axios";
import loadImg from '../../../../img/icon/Tilda_Icons_30_System icons/reload.svg'

const DepartList = ({ setTxtMessage, cityRef, setSelectedDepart}) => {

	// variable
	// змінна, показує підказку біля вікна вводу
	let [showHelpMessage, setShowHelpMessage] = useState('')
	
	//ефект, робить запит за списком відділень, при відмалюванні компоненти
	useEffect(() => {getListDepart(cityRef)}, [cityRef])
	

	// інтерфейс форми
	interface iForm {
		city: string
	}

	// опис форми
	const {register, handleSubmit} = useForm<iForm>({})

	// функція обробки форми
	const contactDataFormSubmit: SubmitHandler<iForm> = (data) => {}
	
	//функція обробки вибору відділення
	 const selectData = e => {
		setSelectedDepart(true)
		setTxtMessage({departCurent: e.currentTarget.value})
	 }

	// функція, обробки вводу в поле форми
	async function formAction(e: any) {
		setBlockField(true)
		await setSelectListDepart(createSelectDepart( arrayListDepart, e.currentTarget.value ))
		setBlockField(false)
	}

	// axios buisnes logic
	//=====================________+++++++++++++++++++==========================

	// block field while get response
	let [blockField, setBlockField] = useState(false)
	//масив адрес відділень
	let [ arrayListDepart, setarrayListDepart ] = useState([])
	// змінна з селектом адрес
	let [selectListDepart, setSelectListDepart] = useState(<div></div>)

	// функція, яка виконує запит за списком відділень
	const getListDepart = (data) => {
		setBlockField(true)
		getDepartList(data)
	}

	// запит списку відділень та поштоматів
	const getDepartList = (cityRef: any) => {
		axios.post('https://api.novaposhta.ua/v2.0/json/', {
			apiKey: "b5a115ed48f80f48e00d1a5e003dc39d",
			modelName: "Address",
			calledMethod: "getWarehouses",
			methodProperties: {
				SettlementRef : cityRef
			}
		}).then(function (response) {
			setarrayListDepart(response.data.data)
			setSelectListDepart(createSelectDepart(response.data.data))
			setBlockField(false)
		}).catch(function (error) {
			alert(error)
		}).finally(function () {
			// виконується завжди
		});
	}
	
	// функція, створює селект лист з відділеннями
	const createSelectDepart = (adresList: any, keySerchDepart: string) => {
		return <select {...register('departCurent')} className={classes.selectCity} 
		readOnly={blockField} onChange={ selectData } >
			<option key='-1' value='0'>виберіть відділення зі списку</option>
			{adresList.map((el: any, count: any) => {

			if (!keySerchDepart) return <option key={count} value={`${el.CityDescription} 
				${el.Description}`}>{el.Description}
			</option>

			if (el.Description.toLowerCase().includes(keySerchDepart.toLowerCase())) return <option key={count} value={`${el.CityDescription} 
				${el.Description}`}>{el.Description}
			</option>
			})}
		</select>
	}
	
	// компонента лоад
	const loadComponent = blockField ? <img src={loadImg} alt={'load'} className={classes.load}/> : ''

	return <form onSubmit={handleSubmit(contactDataFormSubmit)} className={classes.form}>

		<div className={classes.formField}>
			<label htmlFor={'city'}>Відділення</label>
			<span> { showHelpMessage } { loadComponent } </span>
			<input {...register('city')} type='text' id={'city'} 
			onChange={ formAction } readOnly={blockField}/>
			{selectListDepart}
		</div>
	</form>
}

export default DepartList