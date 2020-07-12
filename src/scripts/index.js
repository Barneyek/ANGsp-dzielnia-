import '../styles/index.scss';
import $ from "jquery";

const navSlide = () => {
  const navBurger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__list li');

  navBurger.addEventListener('click', () => {
    nav.classList.toggle('nav__list--open');
    navBurger.classList.toggle('nav__burger--active');

    navLinks.forEach(link => {
      link.classList.toggle("fade");
    });
  });
};

const smsGrid = () => {
  $('.sms__grid a').click(function (e) {
    e.preventDefault();
    $('.sms__grid .sms__item').removeClass('sms__item--active');
    $(this).addClass('sms__item--active');
    if (this.id === !'sms-basic') {
      $('.sms__content--basic').addClass('sms__content--hide');
    } else if (this.id === 'sms-basic') {
      $('.sms__content--basic').removeClass('sms__content--hide');
      $('.section__container--sms').children().not('.sms__content--basic').addClass('sms__content--hide');
    } else if (this.id === 'sms-unique') {
      $('.sms__content--unique').removeClass('sms__content--hide');
      $('.section__container--sms').children().not('.sms__content--unique').addClass('sms__content--hide');
    } else if (this.id === 'sms-dynamic') {
      $('.sms__content--dynamic').removeClass('sms__content--hide');
      $('.section__container--sms').children().not('.sms__content--dynamic').addClass('sms__content--hide');
    } else if (this.id === 'sms-voice') {
      $('.sms__content--voice').removeClass('sms__content--hide');
      $('.section__container--sms').children().not('.sms__content--voice').addClass('sms__content--hide');
    } else if (this.id === 'sms-response') {
      $('.sms__content--response').removeClass('sms__content--hide');
      $('.section__container--sms').children().not('.sms__content--response').addClass('sms__content--hide');
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  navSlide();
  smsGrid();
});
