// @ts-ignore
import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import React from 'react';

const SelectPost = ({setTxtMessage, setactiveComponent}) => {

	// інтерфейс форми
	interface selectPost {
		namePost: string
	}

	// опис форми
	const {register, handleSubmit} = useForm<selectPost>({})

	// функція обробки форми
	const formSubmit: SubmitHandler<selectPost> = (data) => {
		if (!data.namePost) return
		setTxtMessage(data)
		if (data.namePost === 'NovaPost') setactiveComponent(2)
		else setactiveComponent(3)
	}
	
	const goBack = () => setactiveComponent(0)

	return <div className={classes.contactData}>
		<h4> Виберіть спосіб доставки </h4>
		<form onSubmit={handleSubmit(formSubmit)}>

			<div className={classes.formField}>

				<label className={classes.formFieldLabel}>
					<input type="radio" {...register('namePost')} value="NovaPost" />
					<span> Нова пошта </span>
				</label>

				<label className={classes.formFieldLabel}>
					<input type="radio" {...register('namePost')} value="UkrPost" />
					<span> Укр Пошта </span>
				</label>

			</div>

			<div className={classes.formFieldNav}>
				<button onClick={goBack}>Назад</button>
				<button type='submit'>Продовжити</button>
			</div>
		</form>
	</div>
}

export default SelectPost