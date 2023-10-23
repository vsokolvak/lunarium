import classes from './Style.module.scss'
import React, {useState} from "react";
import CityList from './CityList/index.tsx'
import DepartList from './DepartList/index.tsx'

const NovaPost = ({ setTxtMessage, setactiveComponent }) => {

	//змінна, чи показувати список відділень
	let [showDepartList, setShowDepartList] = useState(false)
	//змінна з рейкою міста, передається в відділення для запиту за ними
	let [cityRef, setcityRef] = useState('')
	//змінна, перевіряє, чи вибране відділення
	let [selectedDepart, setSelectedDepart] = useState(false)
	// повідомлення, коли відділення не вибрану
	let [errorMessage, setErrorMessage] = useState('')
	
	//функція, яка приймає дані для запиту за відділеннями
	const getDepart = (cityCurent) => {
		setShowDepartList(true)
		setcityRef(cityCurent)
	}

	//функція повернення назад та вперед
	const goBack = () => setactiveComponent(1)
	const goNext = () => {
		if (selectedDepart) setactiveComponent(4)
		else setErrorMessage('виберіть відділенння')
	}
	
	return <div className={classes.contactData}>
		
		<h4> Нова пошта </h4>
		
		< CityList setTxtMessage={setTxtMessage} getDepart={ getDepart } />
		
		{ !showDepartList || < DepartList setTxtMessage={setTxtMessage} 
		cityRef={ cityRef } setSelectedDepart={setSelectedDepart} />}

		<span style={{color: 'red', padding: '10px'}}> {errorMessage} </span>
		<div className={classes.formFieldNav}>
			<button onClick={goBack}>Назад</button>
			<button onClick={goNext}>Продовжити</button>
		</div>
	</div>
}

export default NovaPost