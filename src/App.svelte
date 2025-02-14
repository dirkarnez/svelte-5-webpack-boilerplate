<script lang="ts">
	// src/i18n.js
	// import { _, register, init, addMessages, getLocaleFromPathname } from 'svelte-i18n';

	// import { route, Router, type Route } from "@mateothegreat/svelte5-router/index";
	// const routes: Route[] = [
	// 	{
	// 		path: "/(.*?)",
	// 		component: mySnippet
	// 	}
	// ];

	import * as a from "i18next";
	// import { createI18nStore } from "svelte-i18next";

	i18next.init({
		lng: 'en',
		resources: {
			en: {
			translation: {
				"key": "hello world"
			}
			}
		},
		interpolation: {
			escapeValue: false, // not needed for svelte as it escapes by default
		}
	});

	import en from './en.json';
	import zh from './zh.json';

	// addMessages('en', en);
	// addMessages('zh', zh);

	// const a = getLocaleFromPathname;

	// console.log(a(/^\/(.*?)\//));


	// init({
	// 	fallbackLocale: 'en',
	// 	initialLocale: 'en'
	// });

// 	{#snippet mySnippet()}
//   <div class="flex flex-col gap-3 bg-green-400 p-4">
//     I'm a snippet!<br />
//     Click on a link above to see the params..
//   </div>
// {/snippet}

	export let name: string;
</script>


<!-- 
<Router basePath="/" {routes} /> -->
<main>
	<h1>Hello {name}!</h1>
	<!-- <a href={`javascript:void(0);`}>{$_('sign_in')}</a> -->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
