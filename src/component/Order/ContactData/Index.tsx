import classes from './Style.module.scss'
import {SubmitHandler, useForm} from "react-hook-form"
import NovaPost from "./NovaPost/Index.tsx";
import SelectPost from "./SelectPost/Index.tsx";

const Order = () => {

	interface iContactForm {
		firstName: string
		lastName: string
		tel: number
	}

	const {register, handleSubmit} = useForm<iContactForm>({})

	const contactDataFormSubmit:SubmitHandler<iContactForm> = (data) => {
		alert(data.firstName + data.lastName + data.tel)
	}

	return <div className={classes.wraper}>
		<div className={classes.content}>
			<h3> Оформлення замовлення </h3>
			<div className={classes.contactData}>
				<h4> Контактні дані </h4>
				<form onSubmit={handleSubmit(contactDataFormSubmit)}>

					<div className={classes.formField}>
						<label htmlFor={'firstName'}>Ім'я</label>
						<input {...register('firstName')} type='text' id={'firstName'}/>
					</div>

					<div className={classes.formField}>
						<label htmlFor={'lastName'}>Прізвище</label>
						<input {...register('lastName')} type='text' id={'lastName'}/>
					</div>

					<div className={classes.formField}>
						<label htmlFor={'tel'}>Телефон</label>
						<input {...register('tel')} type='tel' id={'tel'}/>
					</div>

					<div className={classes.formField}>
						<button>Продовжити</button>
					</div>
				</form>
			</div>

			<SelectPost />

			<NovaPost />


		</div>
		ORDER
	</div>
}

export default Order