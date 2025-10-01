<template>
  <main class="main">
    <aside class="main__sidebar sidebar">
      <ul class="sidebar__list">
        <li class="sidebar__item">Главная</li>
        <li class="sidebar__item">Фото</li>
        <li class="sidebar__item">Биография</li>
        <li class="sidebar__item">Видео</li>
        <li class="sidebar__item">Документы</li>
        <li class="sidebar__item">Календарь</li>
        <li class="sidebar__item">Сообщества</li>
        <li class="sidebar__item">Сообщения</li>
      </ul>
    </aside>

  <section class="main__content content">
    <div class="content__profile">
      <img
        src="../assets/main_portret.png"
        alt="Фото"
        class="content__photo"
      />
      <div class="content__info">
        <h2 class="content__name">Иванов Иван Иванович</h2>
        <p class="content__dates">11.12.1911 – 18.12.1988</p>
        <p class="content__city">г. Уфа</p>
      </div>
    </div>


    <div class="content__biography biography">
      <h3 class="biography__title">Биография</h3>
      <p class="biography__text">
        Об Иванове Иване Ивановиче...
      </p>
    </div>


    <div class="content__map">
      <h3 class="content__map-title">Карта</h3>
      <img
        src="../assets/map.png"
        alt="Карта"
        class="content__map-img"
      />
    </div>


    <div class="content__relatives relatives">
      <h3 class="relatives__title">Родственники</h3>
      <ul class="relatives__list">
        <li class="relatives__item">
          <img src="../assets/main_portret.png" alt="Фото" />
        </li>
        <li class="relatives__item">
          <img src="../assets/main_portret.png" alt="Фото" />
        </li>
        <li class="relatives__item">
          <img src="../assets/main_portret.png" alt="Фото" />
        </li>
      </ul>
    </div>
  </section>


  </main>
</template>
<script lang="ts">
export default {
  name: 'AppBody',
}
</script>
<style scoped lang="scss">
  .main{
    display: flex;
    gap: 1.25rem;
    padding: 1.25rem;
    font-family: Arial, sans-serif;
    background: #fff;
  }

  .sidebar{
    flex: 0 0 12.5rem;
    background: #fff;
    border-radius: 0.625rem;
    padding: 1.25rem;

    &__list{
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item{
      padding: 0.625rem 0;
      cursor: pointer;
      border-bottom: 0.0625rem solid #ccc;
    }
  }

  .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &__profile{
      display: flex;
      gap: 1.25rem;
      align-items: center;
      background-color: #ffffff;
      padding: 1.25rem;
      border-radius: 0.625rem;
    }

    &__photo{
      width: 7.5rem;
      height: 7.5rem;
    }

    &__info{
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;

      & .content__name{
        margin: 0;
        font-size: 1.5rem;
      }

      & .content__dates,
      & .content__city{
        margin: 0;
        color: #444444;
        font-size: 1rem;
      }
    }
  }


  .content__biography,
  .content__map,
  .content__relatives{
    background-color: white;
    padding: 1.25rem;
  }

  .content__map-img{
    width: 100%;
    border-radius: 0.625rem;
  }

  .content__relatives-list{
    display: flex;
    gap: 0.625rem;
    padding: 0;
    list-style: none;

    .content__item img{
      width: 5rem;
      height: 5rem;
    }
  }

  .biography__title,
  .content__map-title,
  .relatives__title{
    margin: 0 0 0.625rem 0;
    font-size: 1.2rem;
  }



</style>
