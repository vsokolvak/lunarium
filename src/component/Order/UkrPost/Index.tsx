import React, {useState} from "react";
import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import axios from "axios";

const UkrPost = ({setTxtMessage, setactiveComponent}) => {

	// variable
	// змінна, показує підказку біля вікна вводу
	let [showHelpMessage, setShowHelpMessage] = useState('')

	// інтерфейс форми
	interface iForm {
		departCurent: string
	}

	// опис форми
	const {register, formState: { errors }, handleSubmit} = useForm<iForm>({})

	// функція обробки форми
	const contactDataFormSubmit: SubmitHandler<iForm> = (data) => {
		setTxtMessage(data)
		setactiveComponent(4)
	}
	
	const goBack = () => setactiveComponent(1)

	return <div className={classes.contactData}>
		<h4> Укр пошта </h4>
		<form onSubmit={handleSubmit(contactDataFormSubmit)}>

			<div className={classes.formField}>
				<label htmlFor={'city'}>Введіть вашу адресу</label>
				<label style={{color: 'red'}}>
					{errors?.departCurent?.message || ''}
				</label>
				<textarea {...register('departCurent',
					{required: 'введіть вашу адресу',
					minLength: {
					value: 3,
					message: 'адреса, має бути більше 3 букв'
					},
					maxLength: {
					value: 60,
					message: 'адреса, має бути менше 60 букв'
					}
					
					}
				)}

				id={'city'} rows='4'/>
			</div>

			<div className={classes.formFieldNav}>
				<button onClick={goBack}>Назад</button>
				<button type='submit'>Продовжити</button>
			</div>
		</form>
	</div>
}

export default UkrPost