<template>
  <!-- <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Accordion Item #1
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Accordion Item #2
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Accordion Item #3
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  </div> -->

  <div class="accordion_list">
    <div class="accordion_list_title">Вопросы и ответы</div>
    <div class="accordion">
      <input type="checkbox" id="accordion_1" class="accordion_input" />
      <label for="accordion_1" class="accordion_title"
        >Фотон масштабирует межядерный поток?</label
      >
      <div class="accordion_text">
        <p>
          В соответствии с принципом неопределенности, гетерогенная структура
          трансформирует электронный взрыв.
        </p>
      </div>
    </div>
    <div class="accordion">
      <input type="checkbox" id="accordion_2" class="accordion_input" />
      <label for="accordion_2" class="accordion_title">Это безопасно?</label>
      <div class="accordion_text">
        <p>
          В соответствии с принципом неопределенности, гетерогенная структура
          трансформирует электронный взрыв.
        </p>
      </div>
    </div>
    <div class="accordion">
      <input type="checkbox" id="accordion_3" class="accordion_input" />
      <label for="accordion_3" class="accordion_title"
        >Фотон масштабирует межядерный поток?</label
      >
      <div class="accordion_text">
        <p>
          В соответствии с принципом неопределенности, гетерогенная структура
          трансформирует электронный взрыв.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.accordion_list {
  margin-bottom: 150px;
}
.accordion_list_title {
  font-size: 17px;
  line-height: 100%;
  text-transform: uppercase;
  color: #00db00;
  margin-bottom: 50px;
}
.accordion {
  background: #202426;
  border-radius: 28px;
  transition: background 0.5s ease-in-out;
  margin-bottom: 8px;
}
.accordion_title {
  position: relative;
  display: block;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #eff6ff;
  padding: 36px;
}
.accordion_title::after {
  content: "";
  display: block;
  position: absolute;
  border: 1px;
  opacity: 0.3;
  border: 1px solid #eff6ff;
  box-sizing: border-box;
  background-image: url("../static/images/Round S arroy right.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  top: 32px;
  right: 32px;
  transition: border-color 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}

.accordion:hover {
  background: #2f3234;
}

.accordion:hover .accordion_title::after {
  border-color: #15ff00;
}

.accordion_input {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  width: 0;
  height: 0;
}

.accordion_input:checked ~ .accordion_title:after {
  transform: rotate(-90deg);
}
.accordion_input:checked ~ .accordion_title {
  padding-bottom: 0;
}
.accordion_input:checked ~ .accordion_text {
  display: block;
}

.accordion_text {
  padding: 0 36px 36px 36px;
  display: none;
  max-width: 750px;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: -0.04em;
  color: #7a838d;
  transition: display 0.5s ease-in-out;
}
</style>
