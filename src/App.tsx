import { Component, onMount } from 'solid-js';

const App: Component = () => {
  onMount(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
  })

  return (
    <main class="App">
      <div class="center title">
        <p class="hidden">Hello</p>
      </div>

      <div class="center play">
        <p class="hidden">I am just here to play around with JavaScript Scroll Animations :D</p>
      </div>

      <div class="center cool hidden">
        <p class="hidden">This is pretty cool</p>
      </div>
    </main>
  );
};

export default App;
