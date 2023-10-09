import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import {useState} from "react";
import axios from "axios";
import loadImg from '../../../img/icon/Tilda_Icons_30_System icons/reload.svg'

const NovaPost = () => {

	// variable
	// змінна, показує підказку біля вікна вводу
	let [showHelpMessage, setShowHelpMessage] = useState('')
	let [selectListCity, setSelectListCity] = useState(<div></div>)

	// інтерфейс форми
	interface iForm {
		city: string
		cityCurent: string
		departCurent: string
	}

	// опис форми
	const {register, handleSubmit} = useForm<iForm>({})

	// функція обробки форми
	const contactDataFormSubmit: SubmitHandler<iForm> = (data) => {
	}

	// функція, обробки вводу в поле форми

	const formAction = (e) => {

		if (e.currentTarget.value.length >= 3) {
			// clear help message
			setShowHelpMessage('')
			setBlockField(true)
			getCityList(e.currentTarget.value)
		}
		// set help message
		else setShowHelpMessage('введіть 3 символи, щоб почати пошук')
	}

	// axios buisnes logic

	// block field while get response
	let [blockField, setBlockField] = useState(false)

	// запит списку населених пунктів
	const getCityList = city => {
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
			console.log(response);
			setSelectListCity(createSelect(response.data.data[0].Addresses))
			setBlockField(false)
		}).catch(function (error) {
			console.log(error);
			setBlockField(false)
		}).finally(function () {
			// виконується завжди
		});
	}

	// функція, створює селект ліст з містами
	const createSelect = (adresList) => {
		return <select {...register('cityCurent')} className={classes.selectCity}
	    onChange={getListDepart}>
			<option key='-1' value='0'>виберіть зі списку</option>
			{adresList.map((el, count) => {
				return <option key={count} value={el.Ref} >
					{el.Present}
				</option>
			})}
		</select>
	}

	// функція, яка виконує запит за списком відділень
	const getListDepart = e => {
		getDepartList(e.target.value)
	}

	// запит списку відділень та поштоматів
	const getDepartList = city => {
		axios.post('https://api.novaposhta.ua/v2.0/json/', {
			apiKey: "b5a115ed48f80f48e00d1a5e003dc39d",
			modelName: "Address",
			calledMethod: "getWarehouses",
			methodProperties: {
				SettlementRef : city
			}
		}).then(function (response) {
			console.log(response);
			setSelectListDepart(createSelectDepart(response.data.data))
		}).catch(function (error) {
			console.log(error);
		}).finally(function () {
			// виконується завжди
		});
	}

	// функція, створює селект лист з відділеннями
	const createSelectDepart = (adresList) => {
		return <select {...register('departCurent')} className={classes.selectCity}>
			<option key='-1' value='0'>виберіть відділення зі списку</option>
			{adresList.map((el, count) => {
				return <option key={count} value={el.SiteKey}>
					{el.Description}
				</option>
			})}
		</select>
	}

	// змінна з селектом адрес
	let [selectListDepart, setSelectListDepart] = useState(<div></div>)

	return <div className={classes.contactData}>
		<h4> Нова пошта </h4>
		<form onSubmit={handleSubmit(contactDataFormSubmit)}>

			<div className={classes.formField}>
				<label htmlFor={'city'}>Населений пункт</label>
				<span> { showHelpMessage } {blockField ? <img src={loadImg} alt={'load'} className={classes.load}/> : ''} </span>
				<input {...register('city')} type='text' id={'city'} onChange={ formAction }
				readOnly={blockField}/>
				{selectListCity}
				<label htmlFor={'a'}>Відділення</label>
				{selectListDepart}
			</div>

			<div className={classes.formFieldNav}>
				<button>Назад</button>
				<button>Продовжити</button>
			</div>
		</form>
	</div>
}

export default NovaPost