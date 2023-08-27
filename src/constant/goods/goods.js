import hameleonImg from '../../img/goods/grup/hameleon.webp'
import cup from '../../img/goods/grup/cup.webp'
import pillow from '../../img/goods/grup/pillow.webp'
import cupPillow from '../../img/goods/grup/cupPillow.webp'
import boxCup from '../../img/goods/grup/boxCup.webp'
import termalCup from '../../img/goods/grup/termalCup.webp'
import ironFlask from '../../img/goods/grup/ironFlask.webp'
import ironCup from '../../img/goods/grup/ironCup.webp'
import giftBox from '../../img/goods/grup/giftBox.webp'
import beerGlass from '../../img/goods/grup/beerGlass.webp'
import puzzle from '../../img/goods/grup/puzzle.webp'

import { hameleon } from './goodsGroup/hameleon/hameleon'

export const goods = [
	// 'Чашки хамелеон'
	{
		name: 'Чашки хамелеон',
		img: hameleonImg,
		path: 'hameleon',
		description: 'Чашка, яка міняє малюнок, від нагрівання. З вашим фото, або надписом.',
		goods: hameleon,
	},
	// 'Чашки'
	{
		name: 'Чашки',
		img: cup,
		puth: 'cup',
		description: 'Чашка З вашим фото, або надписом.',
	},
	// Подушка
	{
		name: 'Подушка',
		img: pillow,
		puth: 'pillow',
		description: 'Подушка З вашим фото, або надписом.',
	},
	// Набір, Чашка та подушка
	{
		name: 'Набір, Чашка та подушка',
		img: cupPillow,
		puth: 'cupPillow',
		description: 'Чашка та подушка З вашим фото, або надписом.',
	},
	// Подарункові коробки для чашок
	{
		name: 'Подарункові коробки для чашок',
		img: boxCup,
		puth: 'boxCup',
		description: 'Дерев"яна коробка для чашки. З вашим фото, або надписом.',
	},
	// Термочашка
	{
		name: 'Термочашка',
		img: termalCup,
		puth: 'termalCup',
		description: 'Чашка, яка зберігає ваш напій, як термос. З вашим фото, або надписом.',
	},
	// Металева фляга
	{
		name: 'Металева фляга',
		img: ironFlask,
		puth: 'ironFlask',
		description: 'Металева фляга. З вашим фото, або надписом.',
	},
	// Подарункові бокси
	{
		name: 'Подарункові бокси',
		img: giftBox,
		puth: 'giftBox',
		description: 'Подарунковий бокс, з різноманітним наповненням.',
	},
	// Металева чашка
	{
		name: 'Металева чашка',
		img: ironCup,
		puth: 'ironCup',
		description: 'Металева чашка. З вашим фото, або надписом.',
	},
	// Пивні бокали
	{
		name: 'Пивні бокали',
		img: beerGlass,
		puth: 'beerGlass',
		description: 'Пивні бокали. З вашим фото, або надписом.',
	},
	// Пазли
	{
		name: 'Пазли',
		img: puzzle,
		puth: 'puzzle',
		description: 'Пазли. З вашим фото, або надписом.',
	},
]