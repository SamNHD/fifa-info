import React from 'react'
import PropTypes from 'prop-types'
import style from './home.module.scss'
import { API_KEY } from '@/src/constants'

const Home = () => {
	fetch('https://v3.football.api-sports.io/players?id=276&season=2019', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': API_KEY,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})
		.catch((error) => {
			console.error(error)
		})

	return (
		<div className={style.home}>
			<div>Nav</div>
			<div>Body</div>
			<div>Footer</div>
		</div>
	)
}

export default Home
