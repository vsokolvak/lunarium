import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {addGoods} from '../../../../redux/reducers/basket'
import FComponent from './fComponent'
import { useParams } from 'react-router-dom'
import {goods} from '../../../../constant/goods/goods'

const GodsCardContainer = ({}) => {
//gods - товар, який тре показати
//addGoodsBasket - функція, яка добавляє товар в корзину
//showSucses - змінна, потрібна для показу ефекту, додавання товару в корзину



//функція додавання товару в корзину
const dispatch = useDispatch()
const addGoodsBasket = (gods) => {
	dispatch(addGoods({...gods, count: 1}))
}

//параметри зі стрічки адреси
const godsParams = useParams()

//функція, яка знайде в масиві даних необхідний товар по параметрах
const initialGods = () => {
	let gods = {}
	gods = goods?.filter(el => el.path === godsParams.grup)[0]?.goods
	gods = gods?.filter(el => el.name === godsParams.name)[0]
	return gods
}

// змінна, в якій буду зберігати активний товар
let [gods, setgods] = useState({})

//один раз присвоюю значення для активного товару
useEffect(() =>{ 
	setgods(initialGods())
},[])

return (
<>
	{gods
	?<FComponent gods={gods}  addGoodsBasket={addGoodsBasket}/>
	:<span style={{padding: '20px',color: 'red', fontSize: '30px'}}>Такого товару немає</span>}
</>
)
}

export default GodsCardContainer