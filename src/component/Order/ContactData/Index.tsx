// @ts-ignore
import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import React from 'react';

const ContactData = ({setTxtMessage, setactiveComponent}) => {

	// інтерфейс форми
	interface iContactForm {
		firstName: string
		lastName: string
		tel: number
	}

	// опис форми
	const {register, formState: { errors }, handleSubmit} = useForm<iContactForm>({})

	// функція обробки відправки форми
	const contactDataFormSubmit:SubmitHandler<iContactForm> = (data) => {
		setTxtMessage(data)
		setactiveComponent(1)
	}


	return <div className={classes.contactData}>
		<h4> Контактні дані </h4>
		<form onSubmit={handleSubmit(contactDataFormSubmit)}>

			<div className={classes.formField}>
				<label htmlFor={'firstName'}>Ім'я</label>
				<label style={{color:'red'}} >{ errors?.firstName?.message || '' }</label>
				<input {...register('firstName',{
					required: 'введіть ваше ім`я',
					minLength: {
					value: 3,
					message: 'Імя, має бути більше 3 букв'
					},
					maxLength: {
					value: 20,
					message: 'Імя, має бути менше 20 букв'
					}
				})}
				type='text' 
				placeholder='Ваше ім`я'
				id={'firstName'}/>
			</div>

			<div className={classes.formField}>
				<label htmlFor={'lastName'}>Прізвище</label>
				<label style={{color:'red'}} >{ errors?.lastName?.message || '' }</label>
				<input {...register('lastName', { 
					required: 'введіть ваше прізвище',
					minLength: {
					value: 3,
					message: 'прізвище, має бути більше 3 букв'
					},
					maxLength: {
					value: 20,
					message: 'прізвище, має бути менше 20 букв'
					}
				})}
				type='text' 
				placeholder='Ваше прізвище'
				id={'lastName'}/>
			</div>

			<div className={classes.formField}>
				<label htmlFor={'tel'}>Телефон</label>
				<label style={{color:'red'}} >{ errors?.tel?.message || '' }</label>
				<input {...register('tel',{ 
					required: 'введіть номер телефону, будь-ласка',
					pattern: {
					  value: /[0-9]/,
					  message: 'введіть номер телефону, будь-ласка'
					}
				})}
				type='tel' 
				placeholder='номер телефону обов`язково'
				id={'tel'}/>
			</div>

			<div className={classes.formField}>
				<button>Продовжити</button>
			</div>
		</form>
	</div>
}

export default ContactData