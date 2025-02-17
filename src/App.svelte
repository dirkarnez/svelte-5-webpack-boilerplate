<script lang="ts">
	import i18next from 'i18next';

	let name: string = 'world';

	i18next.init({
		lng: 'en',
		resources: {
			en: {
				translation: {
					"key": "hello world"
				}
			},
			de: {
				translation: {
					"key": "hel"
				}
			}
		}
	});

</script>

<main>
	<h1>Hello {name} {i18next.t('key')}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		h1 {
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}

		@media (min-width: 640px) {
			max-width: none;
		}
	}
</style>
