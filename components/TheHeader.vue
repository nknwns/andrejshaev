<template>
	<header class="header">
		<div class="container">
			<div class="row">
				<div class="header__wrapper">
					<a href="https://github.com/nknwns" target="_blank" class="header__logo logo">
						<img src="/img/github-white.svg" alt="github logo" class="logo__image">
					</a>
					<nav class="header__navigation navigation">
						<ul class="navigation__list">
							<li class="navigation__item">
								<a href="#about" class="navigation__link">Главная</a>
							</li>
							<li class="navigation__item">
								<a href="#skills" class="navigation__link">Умения</a>
							</li>
							<li class="navigation__item">
								<a href="#works" class="navigation__link">Портфолио</a>
							</li>
							<li class="navigation__item">
								<a href="#contact" class="navigation__link">Контакты</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "TheHeader"
}
</script>
