var slider = {
  items: $('.slide'),
  slideSize: {
    width: $('.wrapper').width(),
    height: $('.wrapper').height()
  },

  init: function() {
    this.items[1].style.left = -this.slideSize.width + 'px';
    this.items[1].classList.add('left');
    this.items[2].style.top = -this.slideSize.height + 'px';
    this.items[2].classList.add('top');
    this.items[3].style.right = -this.slideSize.width + 'px';
    this.items[3].classList.add('right');
    $(this.items[0])
      .clone()
      .appendTo('.wrapper')
      .css('bottom', -this.slideSize.height + 'px')
      .addClass('bottom');

    this.start();
  },

  /**
   * @param {string} direction
   */
  slide: function(direction) {
    $('.wrapper').find('.' + direction).removeClass('slided').css(direction, 0);
    // console.log({direction})
  },

  reposition: function(direction) {
    $('.wrapper').find('.' + direction).addClass('slided');
    var target;

    if (direction === 'left' || direction === 'right') {
      target = $('.wrapper').find('.' + direction);
      target.css(direction, -this.slideSize.width);
    } else {
      target = $('.wrapper').find('.' + direction);
      target.css(direction, -this.slideSize.height);
    }

    $('.wrapper').append(target);
  },

  start: function() {
    var directions = ['left', 'top', 'right', 'bottom'];
    var index = 0;
    var prev = 2;

    var loop = setInterval(() => {
      // debugger;
      slider.slide(directions[index]);
      slider.reposition(directions[prev]);
      
      index++
      if (index === 4) {
        index = 0
      }

      prev++
      if (prev === 4) {
        prev = 0
      }
    }, 2000);
  },
}

slider.init();

