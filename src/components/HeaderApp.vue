<template>
  <header class="header">
    <div class="header__waves">
      <IconWaves />
    </div>

    <a class="header__logo" href="javascript:void(0);">
      <IconLogo />
    </a>

    <nav class="header__nav">
      <div class="header__nav-left">
        <a href="javascript:void(0);" class="header__nav-link header__nav-link--active">Мои сайты</a>
      </div>

      <div class="header__nav-right">
        <a href="javascript:void(0);" class="header__nav-link header__nav-link--name">(Илья)</a>
        <a href="javascript:void(0);" class="header__nav-link">Выйти</a>
      </div>
    </nav>
  </header>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo.vue'
import IconWaves from '@/components/icons/IconWaves.vue'

export default {
  name: 'HeaderApp',
  components: {
    IconLogo, IconWaves
  },
};
</script>