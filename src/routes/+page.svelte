<script>
	// TODO: add types via JSdoc
	export let data; // from +page.js
</script>

<svelte:head>
	<title>pa11y pipeline dashboard</title>
</svelte:head>

<h1 style="margin-top:50px;margin-bottom:10px;font-size:2.5rem;">pa11y pipeline dashboard</h1>
<p style="color:#666;">
	Disclaimer: Automated accessibility testing is not enough. Please always test with screenreaders
	and other tools.
</p>

{#each Object.entries(data.pa11yResults.results) as [siteTitle, siteResults]}
	<h2>Site: <a href={siteTitle}>{siteTitle.replace('https://', '').slice(0, -1)}</a></h2>

	{#if siteResults.length === 0}
		<span style="color:darkgreen;font-weight:bold;">All good, congratulations! 🥳</span>
	{:else}
		<details>
			<summary> Problems found: <span style="color:red;">{siteResults.length}</span></summary>

			{#each siteResults as siteResult}
				<article>
					<header>
						{siteResult.type.charAt(0).toUpperCase() + siteResult.type.slice(1)}: {siteResult.code}
					</header>
					<p>{siteResult.message}</p>

					<pre>
                 <code>{siteResult.context}</code></pre>
				</article>
			{/each}
		</details>
		<!-- 	<p>{JSON.stringify(siteResults)}</p> -->
	{/if}
{/each}

<!-- {JSON.stringify(data.pa11yResults)} -->

<div style="margin-top:250px;text-align:center;">
	<p>
		<a href="https://matthias-andrasch.eu/blog/impressum-datenschutz/">Imprint & privacy</a> |
		<a href="https://github.com/mandrasch/pa11y-pipeline-dashboard">Source Code</a>
	</p>
</div>

<style lang="scss">
	h2 {
		margin-bottom: 1rem;
		margin-top: 1.2rem;
	}
	pre {
		font-size: 0;
	}
	code {
		color: #333;
	}
	summary {
		font-weight: bold;
	}
</style>
