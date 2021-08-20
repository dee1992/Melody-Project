$(document).ready(function () {
  var currentFloor = 2; // текущий этаж
  var floorPath = $('.home-image path'); // каждый отдельный этаж - svg файл
  var counterUp = $('.counter-up'); // кнопка увеличения 
  var counterDown = $('.counter-down'); // кнопка уменьшения
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');

  // функция при наведени мышью на этаж
  floorPath.on('mouseover', function () {
     floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  floorPath.on('click', toggleModal); // отдельно записал функцию открывающее модальное окно
  modalCloseButton.on('click', toggleModal); // отдельно записал функцию открывающее модальное окно
  viewFlatsButton.on('click', toggleModal);

counterUp.on('click', function () {
if (currentFloor < 18) {
  currentFloor++;
  usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2,
  useGroupping: false});
  $('.counter').text(usCurrentFloor);
  floorPath.removeClass('current-floor');
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
}
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--; /* уменьшаю текущий этаж на единицу */
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2,
      useGroupping: false}); /* форматирую */
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
  $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
  function toggleModal() { // функция открыть/закрыть окно
    modal.toggleClass('is-open');
  }
}); 