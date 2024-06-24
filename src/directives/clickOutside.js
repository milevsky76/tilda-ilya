const clickOutsideDirective = {
  beforeMount(el, binding) {
    const onClickOutside = (event) => {
      if (binding.value.isOpen && !(el === event.target || el.contains(event.target))) {
        binding.value.closeDropdown(); // Вызываем метод закрытия dropdown, переданный через параметр
      }
    };

    el._clickOutside = onClickOutside;
  },
  mounted(el, binding) {
    document.addEventListener('click', el._clickOutside);
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el._clickOutside);
    delete el._clickOutside;
  },
};

export default clickOutsideDirective;