<script>
	import '../app.postcss';
	import '../custom.css';
	import Footer from './components/layout/footer.svelte';
	import Header from './components/layout/header.svelte';
	import FloatingSidebar from './components/layout/floating-sidebar.svelte';
</script>

<svelte:head>
	<title> Guhkun | Portofolio </title>
</svelte:head>

<Header/>

<FloatingSidebar/>
<slot />

<Footer/>

