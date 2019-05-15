// Dropdown Menu
const dropdownMenus = document.querySelectorAll('[data-dropdown]');
const açoes = document.querySelectorAll('[data-acoes]');
const subMenuLateral = document.querySelectorAll('[data-menulateral]');



dropdown(dropdownMenus);
dropdown(açoes);
dropdown(subMenuLateral);


function dropdown(seletor){
    seletor.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    });
});

function handleClick(event){
    // event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
    });
}

function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        events.forEach((userEvent) => {
          html.addEventListener(userEvent, handleOutsideClick);
        });

        element.setAttribute(outside,'');
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)){
            element.removeAttribute(outside,'');
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
              });
            callback();
        }

    }
  }
}
