<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<a href="https://gitlab.com/nknwns" target="_blank" class="header__logo logo">
					<img src="img/gitlab-logo.svg" alt="gitlab" class="logo__image">
				</a>
				<nav class="header__navigation navigation">
					<ul class="navigation__list">
						<li class="navigation__item">
							<a href="#about" class="navigation__link">Main</a>
						</li>
						<li class="navigation__item">
							<a href="#skills" class="navigation__link">Skills</a>
						</li>
						<li class="navigation__item">
							<a href="#works" class="navigation__link">Works</a>
						</li>
						<li class="navigation__item">
							<a href="#contact" class="navigation__link">Contact</a>
						</li>
						<li class="navigation__item">
							<a href="#labs" class="navigation__link">Labs</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "TheHeader"
}
</script>
