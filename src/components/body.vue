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

    <section class="main__center center">
      <div class="center__photo-block">
        <img src="../assets/main_portret.png" alt="Фото" class="center__photo" />
      </div>

      <div class="center__gallery gallery">
        <ul class="gallery__list">
          <li class="gallery__item">
            <img src="../assets/main_portret.png" alt="Фото" />
          </li>
          <li class="gallery__item">
            <img src="../assets/main_portret.png" alt="Фото" />
          </li>
          <li class="gallery__item">
            <img src="../assets/main_portret.png" alt="Фото" />
          </li>
        </ul>
      </div>


      <div class="center__map">
        <div class="map__header">
          <span class="map__title">КАРТА</span>
        </div>
        <img src="../assets/map.png" alt="Карта" class="center__map-img" />
      </div>

      <div class="center__relatives relatives">
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

    <section class="main__right right">
      <div class="right__info">
        <div class="right__fio">
          <h2 class="right__surname">Иванов</h2>
          <h3 class="right__firstname">Иван Иванович</h3>
        </div>
        <div class="right__meta">
          <p class="right__city">г. Уфа</p>
          <p class="right__dates">11.12.1911 – 18.12.1988</p>
        </div>
      </div>


      <div class="right__biography biography">
        <div class="biography__header">
          <div class="biography__label">
            <span class="biography__label-text">БИОГРАФИЯ</span>
          </div>
        </div>

        <div class="biography__body">
          <p class="biography__text">
            Ива́н Ива́нович Ивано́в (8 октября 1909, Богородский уезд, Московская губерния — 22 июня 1941, Дубно, Ровенская область) — советский военный лётчик,
            участник Польского похода РККА, советско-финской и Великой Отечественной войн. Старший лейтенант. Герой Советского Союза (посмертно, 1941).
            Почётный гражданин города Фрязино.

            В Рабоче-крестьянской Красной Армии с 1 сентября 1931 года.
            Действительную военную службу начал в артиллерийской части в Московском военном округе.
            По личной просьбе был направлен в военно-воздушные силы РККА.
            Пройдя лётную подготовку, с 1934 года служил в бомбардировочной авиации.
            Принимал участие в боевых операциях Красной Армии на Украинском (1939) и Северо-Западном (1940) фронтах.
            После окончания Зимней войны переведён в истребительную авиацию. К июню 1941 года командовал звеном истребителей
            И-16 46-го истребительного авиационного полка 14-й смешанной авиационной дивизии Киевского особого военного округа.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  name: 'AppBody',
}
</script>

<style lang="scss">

body{
  background: #f6f6f6;
  margin: 0;
}
.main {
  display: grid;
  grid-template-columns: 220px 300px 1fr;
  gap: 1.25rem;
  padding: 1.25rem;
  font-family: Arial, sans-serif;
  /*background: #f6f6f6;*/
  margin-left: 11rem;
  margin-right: 11rem;
}

.sidebar {
  background: #f6f6f6;
  border-radius: 8px;
  padding: 1rem;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    padding: 0.75rem 0;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    font-size: 0.95rem;
  }
}

.center {
  display: flex;
  flex-direction: column;
  gap: 1rem;


  .center__gallery {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
  }

  .gallery__list {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    list-style: none;

    .gallery__item img {
      width: 60px;
      height: 60px;
      border-radius: 6px;
      object-fit: cover;
    }
  }


  &__photo-block,
  &__map,
  &__relatives {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;
  }

  &__photo {
    width: 100%;
    border-radius: 6px;
    object-fit: cover;
  }

  &__map {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;

    .map__header {
      background: #333;
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;

      .map__title {
        color: #fff;
        font-size: 0.95rem;
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    &-img {
      width: 100%;
      display: block;
      border-radius: 0 0 8px 8px;
      object-fit: cover;
    }
  }
}

.relatives__list {
  display: flex;
  gap: 0.5rem;
  padding: 0;
  list-style: none;

  .relatives__item img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
  }
}


.right {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__info {
    background: #fff;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    .right__fio {
      text-align: left;

      .right__surname {
        margin: 0;
        font-size: 1.8rem;
        font-weight: bold;
      }

      .right__firstname {
        margin: 0;
        font-size: 1.4rem;
        font-weight: normal;
        color: #333;
      }
    }

    .right__meta {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .right__city,
      .right__dates {
        margin: 0;
        color: #666;
        font-size: 1rem;
      }
    }
  }

  &__biography {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;

    .biography__header {
      background: #ff5e00;
      height: 40px;
      display: flex;
      align-items: center;
      position: relative;

      .biography__label {
        position: relative;
        padding: 0 2rem;
        height: 100%;
        color: #fff;
        font-weight: 600;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        z-index: 1;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 120%;
          height: 100%;
          background: #333;
          clip-path: polygon(0 0, 90% 0, 80% 100%, 0% 100%);
          z-index: -1;
        }
      }
    }

    .biography__body {
      padding: 1rem;

      .biography__text {
        color: #444;
        font-size: 1rem;
        line-height: 1.4;
        margin: 0;
      }
    }
  }
}



</style>
