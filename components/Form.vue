<template>
  <div class="form">
    <div class="form_title">Проконсультируем вас</div>
    <div class="form_body">
      <div class="container">
        <div class="form_row">
          <div class="form_subTitle">
            Свяжитесь<br />
            со мной
          </div>
          <div class="form_inputs">
            <form class="form_inputs_row" @submit.prevent="onSubmit">
              <input
                class="form_inputs_fullName"
                v-model="fullName"
                placeholder="Имя и фамилия"
              />
              <input
                class="form_inputs_email"
                v-model="email"
                placeholder="E-mail"
              />
              <select v-model="country" class="form_inputs_country">
                <option disabled selected>Страна</option>
                <option class="form_inputs_country_option">Россия</option>
                <option class="form_inputs_country_option">Украина</option>
                <option class="form_inputs_country_option">Казахстан</option>
                <option class="form_inputs_country_option">Беларусь</option>
                <option class="form_inputs_country_option">Таджикистан</option>
              </select>

              <input
                class="form_inputs_button"
                type="submit"
                value="Получить консультацию"
              />
              <div class="form_text">
                Нажимая «Получить консультацию» вы соглашаетесь с
                <span class="form_text_link">политикой конфиденциальности</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      country: "Страна"
    };
  }
};
</script>

<style>
input,
select {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 60px;
}
.form_title {
  font-weight: 600;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-bottom: 50px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.form_body {
  background-color: #1a1f21;
  border-radius: 40px;
  flex: none;
  order: 1;
  flex-grow: 0;
}
.form_row {
  display: flex;
}
.form_subTitle {
  font-size: 46px;
  line-height: 105%;
  letter-spacing: -0.04em;
  flex: 50%;
}
.form_inputs {
  padding: 10px;
  flex: 50%;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
}
.form_inputs_fullName::placeholder,
.form_inputs_email::placeholder {
  color: #eff6ff;
}
.form_inputs_fullName,
.form_inputs_email,
.form_inputs_country {
  border: 1px solid #1a1f21;
  padding: 20px 10px 20px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  width: 562px;
  color: #eff6ff;
  transition: border-color 0.5s ease-in-out;
}
.form_inputs_country {
  margin-bottom: 28px;
}
.form_inputs_email:hover,
.form_inputs_email:focus,
.form_inputs_fullName:hover,
.form_inputs_fullName:focus,
.form_inputs_country:hover,
.form_inputs_country:focus {
  border-color: #7a838d;
}

.form_inputs_button {
  width: 562px;
  justify-content: center;
  align-items: center;
  padding: 32px 10px;
  background: linear-gradient(
      269.1deg,
      #20c7d1 2.7%,
      rgba(144, 228, 0, 0.63) 105.95%
    ),
    linear-gradient(0deg, #1dd052, #1dd052);
  box-shadow: 0px 10px 50px rgba(29, 208, 82, 0.3);
  border-radius: 28px;
  font-size: 17px;
  line-height: 100%;
  text-transform: uppercase;
  color: #121416;
  margin-bottom: 40px;
  transition: background 5s ease-in-out;
}

.form_inputs_button:hover {
  background: linear-gradient(
      120.36deg,
      rgba(255, 247, 53, 0.4) 9.98%,
      rgba(0, 219, 0, 0.4) 49.43%,
      rgba(90, 176, 255, 0.4) 100%
    ),
    linear-gradient(270deg, #20c7d1 0%, rgba(144, 228, 0, 0.63) 106.04%),
    linear-gradient(0deg, #1dd052, #1dd052);
}

.form_text {
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #7a838d;
}
.form_text_link {
  text-decoration: underline;
}
</style>
