<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__left">
        <div class="footer__contact">
          <i class="fas fa-phone"></i>
          <span>8 (800) 000-00-00</span>
        </div>
        <div class="footer__contact">
          <i class="fas fa-envelope"></i>
          <span>info@maildomain.ru</span>
        </div>
      </div>

      <div class="footer__center">
        <img src="../assets/image.png" alt="Логотип" class="footer__logo" />
      </div>

      <div class="footer__right">
        <a href="#" class="footer__icon" aria-label="VK">
          <i class="fab fa-vk"></i>
        </a>
        <a href="#" class="footer__icon" aria-label="Odnoklassniki">
          <i class="fab fa-odnoklassniki"></i>
        </a>
        <a href="#" class="footer__icon" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="footer__icon" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="footer__icon" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="footer__icon" aria-label="YouTube">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.footer {
  background: #2c2c2c;
  color: #ffffff;
  padding: 25px 0;
  font-family: "Arial", sans-serif;
  border-top: 3px solid #ff6600;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    flex-wrap: wrap;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 25px;

    .footer__contact {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
      color: #f0f0f0;

      i {
        color: #f0f0f0;
        font-size: 16px;

         &:hover {
        color: #ff6600;
        transform: scale(1.15);
      }
      }
    }
  }

  &__center {
    text-align: center;

    .footer__logo {
      height: 30px;
      opacity: 0.9;
      filter: brightness(0) invert(1);
    }
  }

  &__right {
    display: flex;
    gap: 14px;

    .footer__icon {
      color: #ffffff;
      font-size: 20px;
      transition: 0.3s ease;

      &:hover {
        color: #ff6600;
        transform: scale(1.15);
      }
    }
  }

  @media (max-width: 768px) {
    &__container {
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }

    &__left {
      flex-direction: column;
      gap: 6px;
    }

    &__right {
      justify-content: center;
    }
  }
}
</style>
