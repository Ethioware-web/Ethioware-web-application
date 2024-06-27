document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('partner-wrapper');
    const clone = wrapper.innerHTML;
    wrapper.innerHTML += clone;
    const contentWidth = wrapper.scrollWidth / 2;
    const animationDuration = contentWidth / 50; 
    wrapper.style.animation = `scroll ${animationDuration}s linear infinite`;
});
