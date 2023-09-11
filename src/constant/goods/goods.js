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

import { hameleonGoods } from './goodsGroup/hameleonGoods/hameleonGoods'
import { cupGoods } from './goodsGroup/cupGoods/cupGoods'
import { pillowGoods } from './goodsGroup/pillowGoods/pillowGoods'
import { cupPillowGoods } from './goodsGroup/cupPillowGoods/cupPillowGoods'
import { boxCupGoods } from './goodsGroup/boxCupGoods/boxCupGoods'
import { termalCupGoods } from './goodsGroup/termalCupGoods/termalCupGoods'
import { ironFlaskGoods } from './goodsGroup/ironFlaskGoods/ironFlaskGoods'
import { giftBoxGoods } from './goodsGroup/giftBoxGoods/giftBoxGoods'
import { ironCupGoods } from './goodsGroup/ironCupGoods/ironCupGoods'
import { beerGlassGoods } from './goodsGroup/beerGlassGoods/beerGlassGoods'
import { puzzleGoods } from './goodsGroup/puzzleGoods/puzzleGoods'

export const goods = [
	// 'Чашки хамелеон'
	{
		name: 'Чашки хамелеон',
		img: hameleonImg,
		path: 'hameleon',
		description: 'Чашка, яка міняє малюнок, від нагрівання. З вашим фото, або надписом.',
		goods: hameleonGoods,
	},
	// 'Чашки'
	{
		name: 'Чашки',
		img: cup,
		path: 'cup',
		description: 'Чашка З вашим фото, або надписом.',
		goods: cupGoods,
	},
	// Подушка
	{
		name: 'Подушка',
		img: pillow,
		path: 'pillow',
		description: 'Подушка З вашим фото, або надписом.',
		goods: pillowGoods,
	},
	// Набір, Чашка та подушка
	{
		name: 'Набір, Чашка та подушка',
		img: cupPillow,
		path: 'cupPillow',
		description: 'Чашка та подушка З вашим фото, або надписом.',
		goods: cupPillowGoods,
	},
	// Подарункові коробки для чашок
	{
		name: 'Подарункові коробки для чашок',
		img: boxCup,
		path: 'boxCup',
		description: 'Дерев"яна коробка для чашки. З вашим фото, або надписом.',
		goods: boxCupGoods,
	},
	// Термочашка
	{
		name: 'Термочашка',
		img: termalCup,
		path: 'termalCup',
		description: 'Чашка, яка зберігає ваш напій, як термос. З вашим фото, або надписом.',
		goods: termalCupGoods,
	},
	// Металева фляга
	{
		name: 'Металева фляга',
		img: ironFlask,
		path: 'ironFlask',
		description: 'Металева фляга. З вашим фото, або надписом.',
		goods: ironFlaskGoods,
	},
	// Подарункові бокси
	{
		name: 'Подарункові бокси',
		img: giftBox,
		path: 'giftBox',
		description: 'Подарунковий бокс, з різноманітним наповненням.',
		goods: giftBoxGoods,
	},
	// Металева чашка
	{
		name: 'Металева чашка',
		img: ironCup,
		path: 'ironCup',
		description: 'Металева чашка. З вашим фото, або надписом.',
		goods: ironCupGoods,
	},
	// Пивні бокали
	{
		name: 'Пивні бокали',
		img: beerGlass,
		path: 'beerGlass',
		description: 'Пивні бокали. З вашим фото, або надписом.',
		goods: beerGlassGoods,
	},
	// Пазли
	{
		name: 'Пазли',
		img: puzzle,
		path: 'puzzle',
		description: 'Пазли. З вашим фото, або надписом.',
		goods: puzzleGoods,
	},
]