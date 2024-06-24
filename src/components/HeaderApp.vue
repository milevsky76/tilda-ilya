<template>
	 <header>
		<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div> -->
	</header>
	
	<div class="td-menucontainer">
		<div class="t-menu">
			<div class="t-menu__wrapper">
				<div class="t-menu__waves">
					<svg style="display:block; width:23px; height:60px;" enable-background="new 0 0 46 130" version="1.1" viewBox="0 0 46 130" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path style="fill:#fff;" d="m46 73.1c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.2-7.1-5.9-2.9-4.4-4.8-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1c0.3-0.1 0.7-0.1 1-0.1 3.7 0 5.6 3.2 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4z"></path><path style="fill:#fff;" d="m46 59.8c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.2-7.1-5.9-2.9-4.4-4.8-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1c0.3-0.1 0.7-0.1 1-0.1 3.7 0 5.6 3.2 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4z"></path><path style="fill:#fff;" d="m46 46.5c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.2-7.1-5.9-2.9-4.4-4.8-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1c0.3-0.1 0.7-0.1 1-0.1 3.7 0 5.6 3.1 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4z"></path><path style="fill:#fff;" d="m46 33.2c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.2-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.7-3.1-7.3-5.9-2.6-4.4-4.5-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1c0.3-0.1 0.7-0.1 1-0.1 3.8 0 5.6 3.1 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4z"></path><path style="fill:#fff;" d="m39.8 130c0.3-0.4 0.5-0.9 0.8-1.4 1.3-2.3 2.7-4.9 5.4-5.7v3.3c-1 0.7-1.8 2-2.7 3.7l-3.5 0.1z"></path><path style="fill:#fff;" d="m16.5 130c0.3-0.4 0.5-0.9 0.8-1.4 1.5-2.7 3.3-5.9 7.1-5.9s5.6 3.2 7.1 5.9c0.3 0.5 0.6 1 0.8 1.4h-3.4c-1.5-2.7-2.6-4.3-4.4-4.3-1.9 0-3 1.7-4.4 4.3h-3.6z"></path><path style="fill:#fff;" d="m0 122.8c0.4-0.1 0.8-0.1 1.2-0.1 3.8 0 5.6 3.2 7.1 5.9 0.3 0.5 0.6 1 0.8 1.4h-3.5c-1.5-2.7-2.6-4.3-4.4-4.3-0.4 0-0.8 0.1-1.2 0.3v-3.2z"></path><path style="fill:#fff;" d="m46 113c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4c-0.5 0-0.9 0.1-1.3 0.3v-3.2c0.4-0.1 0.8-0.1 1.3-0.1 3.7 0 5.6 3.2 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.7-4.9 5.4-5.7v3.4z"></path><path style="fill:#fff;" d="m0 96.2c0.3-0.1 0.6-0.1 1-0.1 3.7 0 5.6 3.2 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.2-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.2-7.1-5.9-2.9-4.4-4.8-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1z"></path><path style="fill:#fff;" d="m46 86.4c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.1-7.2-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.7-3.1-7.3-5.9-2.6-4.4-4.5-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1c0.3-0.1 0.7-0.1 1-0.1 3.8 0 5.6 3.2 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.2 7.1 5.9c1.6 2.8 2.6 4.4 4.5 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-5.1 5.7-5.7v3.4z"></path><path style="fill:#fff;" d="m0 16.4c0.3-0.1 0.7-0.1 1-0.1 3.7 0 5.6 3.1 7.1 5.9s2.6 4.4 4.5 4.4 3-1.7 4.5-4.4 3.3-5.9 7.1-5.9 5.6 3.1 7.1 5.9c1.7 2.8 2.7 4.4 4.7 4.4s3-1.7 4.5-4.4c1.3-2.3 2.8-4.9 5.5-5.7v3.4c-1 0.7-1.8 2.1-2.8 3.8-1.5 2.7-3.3 5.9-7.1 5.9s-5.6-3.1-7.1-5.9-2.6-4.4-4.5-4.4-3 1.7-4.5 4.4-3.3 5.9-7.1 5.9-5.6-3.1-7.1-5.9-2.9-4.4-4.8-4.4c-0.4 0-0.7 0.1-1 0.2v-3.1z"></path><path style="fill:#fff;" d="M46,6.5c-1,0.7-1.9,2.1-2.9,3.9c-1.5,2.7-3.3,5.9-7.1,5.9s-5.6-3.1-7.1-5.9S26.2,6,24.3,6s-3,1.7-4.5,4.4  s-3.3,5.9-7.1,5.9s-5.6-3.1-7.1-5.9S2.9,6,1,6C0.6,6,0.3,6.1,0,6.2l0-3.1C0.3,3,0.7,3,1,3c3.8,0,5.6,3.1,7.1,5.9s2.6,4.4,4.5,4.4  s3-1.7,4.5-4.4S20.5,3,24.3,3s5.6,3.2,7.1,5.9c1.6,2.8,2.6,4.4,4.5,4.4s3-1.7,4.5-4.4C41.7,6.6,43.2,4,46,3.2L46,6.5z"></path><path style="fill:#fff;" d="m18 0c-1.2 1.7-2.9 3-5.3 3s-4.1-1.3-5.3-3h10.6z"></path><path style="fill:#fff;" d="m41.4 0c-1.3 1.7-2.9 3-5.4 3-2.4 0-4.1-1.3-5.3-3h10.7z"></path></svg>
				</div>
				<div class="t-menu__logo">
					<a href="javascript:void(0);">
						<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" style="display:block;width:35px;height:35px;"><g><path style="fill:#fff;" d="M37,31.1V55.47H32.23V29.4Z"></path><path style="fill:#fff;" d="M18.66,28.95c-.17-6.33,3.17-9.61,7.52-9.61,2.66,0,4.69.85,9,2.88,3.17,1.53,5.48,2.66,7.86,2.66s3.34-1.87,3.39-5.32h3.79c.34,7.07-3.28,9.61-7.24,9.61-2.54,0-4.81-.74-9.16-2.77-3-1.47-5.32-2.77-7.58-2.77s-3.68,1.58-3.73,5.43H18.66Z"></path><path style="fill:#fff;" d="M35,70A35,35,0,1,1,70,35,35,35,0,0,1,35,70ZM35,2.26A32.74,32.74,0,1,0,67.74,35,32.78,32.78,0,0,0,35,2.26Z"></path></g></svg>
					</a>
				</div>
				<div class="t-menu__burger"></div>
				<div class="t-menu__leftitems">
					<a href="javascript:void(0);" class="t-menu__item t-menu__item_active">Мои сайты</a>
				</div>
				<div class="t-menu__rightitems">
					<a href="javascript:void(0);" class="t-menu__item" style="opacity:0.5; margin-right: -10px;">(Илья)</a>
					<a href="javascript:void(0);" class="t-menu__item">Выйти</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
	name: 'HeaderApp',
};
</script>

<style>
.t-menu {
		position: relative;
		background-color: #000;
		z-index: 100;
		box-sizing: border-box;
		font-family: 'tfutura', Arial;
		font-weight: 500;
		font-size: 14px;
}
.t-menu__wrapper {
		display: table;
		height: 60px;
		width: 100%;
		min-width: 999px;
		white-space: nowrap;
}
.t-menu__waves {
		display: table-cell;
		width: 25px;
}
.t-menu__logo {
		display: table-cell;
		width: 35px;
		vertical-align: middle;
		padding-left: 20px;
		padding-right: 15px;
}
.t-menu__burger {
		display: none;
}
.t-menu__leftitems {
		display: table-cell;
		vertical-align: middle;
		width: 380px;
}
a {
		background: transparent;
		color: #000000;
		text-decoration: none;
}
a:hover {
		color: #ff8562;
		text-decoration: none;
		outline: 0;
}
.t-menu__item {
		display: inline-block;
		list-style: none;
		color: #ffffff;
		font-size: 16px;
		text-decoration: none;
		margin: 0 15px;
		height: 57px;
		line-height: 60px;
		text-decoration: none;
}
.t-menu__item_active {
		border-bottom: 3px solid #f4846b;
}
.t-menu__rightitems {
		display: table-cell;
		vertical-align: middle;
		text-align: right;
		max-width: 100%;
		padding: 0 20px;
}
</style>