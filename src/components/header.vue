<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img class="header__logo-img" src="../assets/image.png" alt="Логотип" />
      </div>

      <div class="header__search">
        <svg
          class="header__search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M10 2a8 8 0 105.29 14.29l4.71 4.7 1.41-1.41-4.7-4.71A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
          />
        </svg>
        <input class="header__search-input" type="text" placeholder="Поиск" />
      </div>
      <nav class="header__navigation">
        <a class="header__navigation-link header__navigation-link--active" href="#"
          >СТРАНИЦА ПАМЯТИ</a
        >
        <a class="header__navigation-link" href="#">КОНТАКТЫ</a>
        <a class="header__navigation-link" href="#">ПОМОЩЬ</a>
        <a class="header__navigation-link" href="#">НАСТРОЙКИ</a>
      </nav>

      <button class="header__exit"><span class="header__exit-text">ВЫХОД</span></button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background: #e75f37;
  padding: 0 1rem;
  color: #fff;
  height: 3rem;

  &__logo-img {
    height: 2rem;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 2rem;
  }

  &__search {
    position: relative;
    flex: 1;
    max-width: 300px;
    margin-right: 1rem;

    &-icon {
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #000000;
      pointer-events: none;
    }

    &-input {
      padding: 0.4rem 0.5rem 0.4rem 2rem;
      background-color: #851d02;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }

    &-input::placeholder {
      color: #b64621;
    }
  }

  &__navigation {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-link {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;

      &:hover {
        text-decoration: underline;
      }

      &--active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  &__exit {
    background: #444;
    color: #fff;
    border: none;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: skew(-20deg);

    &-text {
      font-weight: 500;
      transform: skew(20deg);
    }

    &:hover {
      background: #222;
    }
  }
}
</style>
