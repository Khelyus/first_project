<template>
  <header class="header">
    <div class="header_container">
      <div class="header_logo">
        <img src="../assets/image.png" alt="Логотип" />
      </div>

      <div class="header_search">
        <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 2a8 8 0 105.29 14.29l4.71 4.7 1.41-1.41-4.7-4.71A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
        <input type="text" placeholder="Поиск"/>
      </div>
      <nav class="header_nav">
        <a href="#">СТРАНИЦА ПАМЯТИ</a>
        <a href="#">КОНТАКТЫ</a>
        <a href="#">ПОМОЩЬ</a>
        <a href="#">НАСТРОЙКИ</a>
      </nav>

      <button class="header_exit"><span>ВЫХОД</span></button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background: #e75f37;
  padding: 0 1rem;
  color: #fff;
  height: 3rem;
}

.header_logo img {
  height: 2rem;
}

.header_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
}

.header_search {
  position: relative;
  flex: 1;
  max-width: 300px;
  margin-right: 1rem;
}

.search_icon {
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #000000;
  pointer-events: none;
}

.header_search input {
  padding: 0.4rem 0.5rem 0.4rem 2rem;
  background-color: #851d02;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.header_search input::placeholder {
  color: #b64621;
}

.header_nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header_nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}

.header_nav a:hover {
  text-decoration: underline;
}

.header_exit {
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
}

.header_exit span {
  font-weight: 500;

}

.header_exit:hover {
  background: #222;
}
</style>
