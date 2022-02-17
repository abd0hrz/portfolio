import { throttle } from 'throttle-debounce'

import './index.scss'

$(document).ready(() => {
  $('.loading-indicator').hide()
  const messagesUrl = process.env.MESSAGES_API_URL

  const isElementInViewport = (el) => {
    let top = el.offsetTop
    let left = el.offsetLeft
    const width = el.offsetWidth
    const height = el.offsetHeight

    while (el.offsetParent) {
      el = el.offsetParent
      top += el.offsetTop
      left += el.offsetLeft
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    )
  }

  // eslint-disable-next-line no-sparse-arrays
  const indexes = [, , , , ,]

  const onScroll = () => {
    if (document.body.scrollTop > 400) {
      $('.btn-next-page')
        .removeClass('slideOutRight')
        .addClass('d-md-flex animated  slideInRight faster')
    } else {
      $('.btn-next-page')
        .removeClass('slideInRight')
        .addClass(' animated  slideOutRight faster')
    }

    $('.section-content').each(function (index) {
      const isVisible = isElementInViewport(this)

      if (index === 1 && !indexes[1]) {
        $('.skills__container')
          .removeClass('invisible')
          .addClass('animated fadeInRight')
        animateChart()
      }
      if (index === 2 && !indexes[2]) {
        $('.timeline__item').each(function (index) {
          const $this = $(this)
          setTimeout(() => {
            $this.removeClass('invisible').addClass('animated fadeIn')
          }, index * 100)
        })
      }
      if (index === 3 && !indexes[3]) {
        $('#projects .projects_container')
          .removeClass('invisible')
          .addClass('animated fadeIn')
      }

      if (isVisible) {
        $(`.section-link:not(:nth-child(${index + 1}))`)
          .not('.menu .section-link')
          .removeClass('text-title rubberBandd jello')

        $(`.section-link:nth-child(${index + 1})`)
          .not('.menu .section-link')
          .addClass('text-title rubberBandd jello')
        indexes[index] = true
        return false
      }
    })
  }

  const animateChart = (change) => {
    $('.chart').easyPieChart({
      size: 75,
      barColor: '#08fdd8',
      scaleLength: 0,
      lineWidth: 8,
      trackColor: 'rgba(255, 255, 255, 0.534)',
      lineCap: 'circle',
      animate: 2000,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const params = {}
    $('.contact-form .contact-input').each(function () {
      params[this.name] = this.value
    })
    $('.contact-form button').prop('disabled', true)

    $('#submit-icon').toggleClass('fa-paper-plane fa-spinner fa-spin')
    axios
      .get(messagesUrl, { params })
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'I have received your message and will respond to you soon!',
          showConfirmButton: false,
          timer: 4000,
          background: '#f8f9fa',
        })
        $('.contact-form').trigger('reset')
      })
      .catch(() =>
        Swal.fire({
          icon: 'error',
          text: 'Sorry, an error happened when trying to send the message!',
          showConfirmButton: false,
          timer: 4000,
          background: '#f8f9fa',
        })
      )
      .finally(() => {
        $('#submit-icon').toggleClass('fa-paper-plane fa-spinner fa-spin')
        $('.contact-form button').removeAttr('disabled')
      })
  }

  const clickOutside = ({ target }) => {
    const menu = $('#menu-drawer')
    const slideOutLeft = menu.hasClass('slideOutLeft')
    const slideInLeft = $('#menu-drawer').hasClass('slideInLeft')

    if (target !== menu && !slideOutLeft && slideInLeft) {
      $('#menu-btn').click()
      event.stopPropagation()
      event.preventDefault()
    }
  }

  document.addEventListener('click', clickOutside)

  $('.portfolio-aside')
    .clone()
    .attr('id', 'menu-drawer')
    .toggleClass('d-lg-none d-lg-block ')
    .prependTo('body')

  onScroll()
  $(document).scroll(throttle(50, onScroll))

  $('#menu-btn').click(function (event) {
    event.stopPropagation()
    $('.mobile-menu-icon').toggleClass('fa-times').toggleClass('fa-bars')

    const slideInLeft = $('#menu-drawer').hasClass('slideInLeft')
    const slideOutLeft = $('#menu-drawer').hasClass('slideOutLeft')

    if (!slideInLeft && !slideOutLeft) {
      $('#menu-drawer').toggleClass('d-none slideInLeft ')
    } else {
      $('#menu-drawer').toggleClass('slideOutLeft')
    }
  })

  $('.btn-next-page').click(function (event) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  $('.section-link').on('click', function (e) {
    e.preventDefault()
    $('.mobile-menu-icon').click()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500
    )
  })
  $('.contact-form').on('submit', onSubmit)

  $('.projects__type').click(function () {
    $('.projects__type').removeClass('projects__type--active')
    const $this = $(this)
    $this.addClass('projects__type--active')
    const type = $this.attr('data-type')

    if (type) {
      $(`.projects__item[data-type=${type}]`).removeClass('d-none')
      $(`.projects__item`)
        .not(`.projects__item[data-type=${type}]`)
        .addClass('d-none')
    } else {
      $(`.projects__item`).removeClass('d-none')
    }
  })

  new TypeIt('.typed', {
    startDelay: 800,
    speed: 80,
    deleteSpeed: 40,
  })
    .type('Front End developer')
    .pause(800)
    .delete()
    .pause(300)
    .type('Backend developer')
    .pause(800)
    .delete()
    .pause(300)
    .type('Full stack JS developer')
    .go()
})
