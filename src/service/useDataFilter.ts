import _ from "lodash"

import { useMemo, useState } from "react"

export const paginate = <T>(
	items: T[],
	currentPage: number,
	totalPages: number,
) => {
	const startIndex: number = (currentPage - 1) * totalPages
	return items.slice(startIndex).filter((_, index) => index < totalPages)
}
const useDataFilter = <T extends { tag: string }>(data: T[]) => {
	const [activeTag, setActiveTag] = useState("")
	const [currentPage, setCurrentPage] = useState(1)
	const [pageSize] = useState(6)

	const uniqueTags = useMemo(() => {
		const tags = data.map((item) => item.tag)
		return _.uniq(tags)
	}, [data])

	const { paginated, itemCount } = useMemo(() => {
		const posts = activeTag
			? data.filter((post) => post.tag === activeTag)
			: data
		const paginated = paginate(posts, currentPage, pageSize)

		return { paginated, itemCount: posts.length }
	}, [activeTag, pageSize, currentPage, data])

	return {
		activeTag,
		uniqueTags,
		paginated,
		itemCount,
		data,
		currentPage,
		pageSize,
		onPageChange: setCurrentPage,
		onTagChange: setActiveTag,
	}
}

export default useDataFilter

const recipes = [
	{
		name: 'Classic Nigerian Jollof Rice',
		description: 'The crown jewel of West African cuisine, perfectly spiced and aromatic with every grain.',
		img: '/assets/recipe-imgs/img/jollof-rice.png',
		time: '45 mins',
		serving: '6 servings',
		seasoning: 'Zuri Chicken',
		difficulty: 'Medium',
		tag: 'Dinner',
		id: 'classic-nigerian-jollof-rice'
	},
	{
		name: 'Spicy Pepper Soup',
		description: 'Warming, aromatic broth with bold spices perfect for cool evenings or when you need comfort.',
		img: '/assets/recipe-imgs/img/pepper-soup.png',
		time: '30 mins',
		serving: '4 servings',
		seasoning: 'Zuri Pepper Soup',
		difficulty: 'Easy',
		tag: 'Soup',
		id: 'spicy-pepper-soup'
	},
	{
		name: 'Grilled Chicken Suya Style',
		description: 'Street food favorite with smoky, spicy peanut coating that makes every bite unforgettable.',
		img: '/assets/recipe-imgs/img/griilled-chicken.png',
		time: '25 mins',
		serving: '4 servings',
		seasoning: 'Zuri Chicken',
		difficulty: 'Easy',
		tag: 'Dinner',
		id: 'grilled-chicken-suya-style'
	},
	{
		name: 'Nigerian Fried Rice',
		description: 'Colorful, vibrant rice dish loaded with vegetables and perfectly seasoned protein.',
		img: '/assets/recipe-imgs/img/fried-rice.png',
		time: '40 mins',
		serving: '6 servings',
		seasoning: 'Zuri Chicken',
		difficulty: 'Medium',
		tag: 'Dinner',
		id: 'nigerian-fried-rice'
	},
	{
		name: 'Akara (Bean Cakes)',
		description: 'Crispy on the outside, fluffy inside - these protein-packed fritters are breakfast gold.',
		img: '/assets/recipe-imgs/img/akara-beans.png',
		time: '20 mins',
		serving: '4 servings',
		seasoning: 'Zuri Pepper Soup',
		difficulty: 'Easy',
		tag: 'Breakfast',
		id: 'akara-bean-cakes'
	},
	{
		name: 'Fried Plantain with Stew',
		description: 'Sweet caramelized plantains paired with rich, spicy tomato stew for the ultimate comfort meal.',
		img: '/assets/recipe-imgs/img/fried-plantain.png',
		time: '35 mins',
		serving: '4 servings',
		seasoning: 'Zuri Beef',
		difficulty: 'Easy',
		tag: 'Snacks',
		id: 'fried-plantain-with-stew'
	},
	{
		name: 'Egusi Soup',
		description: 'Hearty melon seed soup with leafy greens and tender meat in rich, savory broth.',
		img: '/assets/recipe-imgs/img/egusi-soup.png',
		time: '50 mins',
		serving: '6 servings',
		seasoning: 'Zuri Beef',
		difficulty: 'Medium',
		tag: 'Soup',
		id: 'egusi-soup'
	},
	{
		name: 'Fish Stew',
		description: 'Delicate fish pieces in aromatic tomato sauce with herbs and spices.',
		img: '/assets/recipe-imgs/img/fish-stew.png',
		time: '30 mins',
		serving: '4 servings',
		seasoning: 'Zuri Fish',
		difficulty: 'Easy',
		tag: 'Lunch',
		id: 'fish-stew'
	},
	{
		name: 'Beef Stew',
		description: 'Rich, slow-cooked beef in vibrant red sauce - a Nigerian staple that never disappoints.',
		img: '/assets/recipe-imgs/img/beef-stew.png',
		time: '55 mins',
		serving: '6 servings',
		seasoning: 'Zuri Beef',
		difficulty: 'Medium',
		tag: 'Dinner',
		id: 'beef-stew'
	}
]