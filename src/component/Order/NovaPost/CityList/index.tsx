import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import React, {useState} from "react";
import axios from "axios";
import loadImg from '../../../../img/icon/Tilda_Icons_30_System icons/reload.svg'

const CityList = ({ getDepart }) => {

	// variable
	// змінна, показує підказку біля вікна вводу
	let [showHelpMessage, setShowHelpMessage] = useState('введіть 3 символи, щоб почати пошук')
	let [selectListCity, setSelectListCity] = useState(<div></div>)

	// інтерфейс форми
	interface iForm {
		city: string
		cityCurent: string //id міста, потрібен для запиту, ігнорувати
		departCurent: string //адреса відділення
	}

	// опис форми
	const {register, handleSubmit} = useForm<iForm>({})

	// функція обробки форми
	const contactDataFormSubmit: SubmitHandler<iForm> = (data) => {}

	// функція, обробки вводу в поле форми
	const formAction = (e: any) => {

		if (e.currentTarget.value.length >= 3) {
			// clear help message
			setShowHelpMessage('')
			setBlockField(true)
			setSelectListCity(<select></select>)
			getCityList(e.currentTarget.value)
		}
		// set help message
		else setShowHelpMessage('введіть 3 символи, щоб почати пошук')
	}
	
	//функція обробки вибору міста
	const choiseCity = (e) => {
		getDepart(e.currentTarget.value)
	}

	// axios buisnes logic

	// block field while get response
	let [blockField, setBlockField] = useState(false)

	// запит списку населених пунктів
	const getCityList = (city: any) => {
		axios.post('https://api.novaposhta.ua/v2.0/json/', {
			apiKey: "b5a115ed48f80f48e00d1a5e003dc39d",
			modelName: "Address",
			calledMethod: "searchSettlements",
			methodProperties: {
				CityName: city,
				Limit: 10,
				Page: 1
			}
		}).then(function (response) {
			setSelectListCity(createSelect(response.data.data[0].Addresses))
		}).catch(function (error) {
			alert(error)
		}).finally(function () {
			// виконується завжди
			setBlockField(false)
		});
	}

	// функція, створює селект ліст з містами
	const createSelect = (adresList: any) => {
		const list = [<option key='-1' value='0' >виберіть зі списку</option>]
		adresList.map((el: any, count: any) => {
			list.push(<option key={count} value={el.Ref}>
				{el.Present}
			</option>)
		})

		return <select {...register('cityCurent')} className={classes.selectCity}
		onChange={ choiseCity } defaultValue='0' >
			{list}
		</select>
	}

	// компонента лоад
	const loadComponent = blockField ? <img src={loadImg} alt={'load'} className={classes.load}/> : ''

	return <form onSubmit={handleSubmit(contactDataFormSubmit)} className={classes.form}>

		<div className={classes.formField}>
			<label htmlFor={'city'}>Населений пункт</label>
			<span> { showHelpMessage } { loadComponent } </span>
			<input {...register('city')} type='text' id={'city'} 
			onChange={ formAction } readOnly={blockField}/>
			{selectListCity}
		</div>
		
	</form>
}

export default CityList