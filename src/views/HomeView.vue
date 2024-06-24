<template>
	<div class="td-sites-uppanel">
		<div class="td-sites-uppanel__wrapper">
			<div class="td-sites-uppanel__title">Мои проекты:</div>
			<div class="td-sites-uppanel__rightside">

				<HomeItemAdd
					@addProjectItem="addProjectItem"
				/>

			</div>
		</div>
	</div>

	<HomeList
		:projects="projects"
	/>
</template>

<script>
import HomeList from '@/components/HomeView/HomeList.vue'
import HomeItemAdd from '@/components/HomeView/HomeItemAdd.vue'

export default {
	name: 'App',
	data() {
		return {
			projects: [
				{ id: 1, name: 'My project' },
				{ id: 2, name: 'My project' },
				{ id: 3, name: 'My project' },
				{ id: 4, name: 'My project' }
			]
		}
	},
	components: {
		HomeList, HomeItemAdd
	},
	methods: {
		addProjectItem(item) {
			this.projects.push(item);
		}
	},
}
</script>

<style>
.td-sites-uppanel {
		position: relative;
		max-width: 1160px;
		width: 100%;
		margin: auto;
		padding: 50px 0 30px 0;
}

.td-sites-uppanel__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
}

.td-sites-uppanel__title {
		font-size: 18px;
		font-weight: 300;
		opacity: .5;
		cursor: default;
}
.td-sites-uppanel__rightside {
		display: flex;
		flex-wrap: wrap;
		font-size: 18px;
		align-items: center;
		gap: 20px;
}

.td-sites-uppanel__rightbtn-table {
		display: flex;
		align-items: center;
		cursor: pointer;
		gap: 10px;
}
.td-sites-uppanel__rightbtn-table svg {
		display: block;
		width: 15px;
		height: 15px;
		padding: 5px;
		background-color: #fa886e;
		border-radius: 50%;
		flex-shrink: 0;
}
.td-sites-uppanel__rightbtn-table:hover {
		color: #f4846b;
}
</style>