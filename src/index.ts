type TTarget = string | HTMLElement | Element | any;

const getElement = (target: TTarget) => {
  const isString = typeof target === 'string';

  return isString ? document.querySelector(target) : target;
};

export const stickyElement = (target: TTarget) => {
  const targetOffset = getElement(target).offsetHeight;

  const body = document.querySelector('body') as HTMLBodyElement;
  const style = getElement(target).style;

  window.onscroll = () => {
    if (window.scrollY > targetOffset) {
      style.position = 'fixed';
      style.top = '0';
      style.width = '100%';
      body.style.paddingTop = `${getElement(target).offsetHeight}px`;
    } else {
      style.position = '';
      style.top = '';
      style.width = '';
      body.style.paddingTop = '';
    }
  };
};
