import { Component, onCleanup, onMount } from 'solid-js';

const App: Component = () => {
  let animationRefs: HTMLParagraphElement[] = [];
  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          if(entry.target.classList.contains("hidden-opacity-animation")) {
            entry.target.classList.add('show-opacity-animation');
          }
          if(entry.target.classList.contains("hidden-blur-animation")) {
            entry.target.classList.add('show-blur-animation');
          }
          if(entry.target.classList.contains("hidden-left-transform-animation")) {
            entry.target.classList.add('show-left-transform-animation');
          }
          if(entry.target.classList.contains("hidden-right-transform-animation")) {
            entry.target.classList.add('show-right-transform-animation');
          }
          if(entry.target.classList.contains("hidden-multiple-transform-animation")) {
            entry.target.classList.add('show-multiple-transform-animation');
          }
          if(entry.target.classList.contains("hidden-delay-transform-animation")) {
            entry.target.classList.add('show-delay-transform-animation');
          }
        }
        else {
          if(entry.target.classList.contains("show-opacity-animation")) {
            entry.target.classList.remove('show-opacity-animation');
          }
          if(entry.target.classList.contains("show-blur-animation")) {
            entry.target.classList.remove('show-blur-animation');
          }
          if(entry.target.classList.contains("show-left-transform-animation")) {
            entry.target.classList.remove('show-left-transform-animation');
          }
          if(entry.target.classList.contains("show-right-transform-animation")) {
            entry.target.classList.remove('show-right-transform-animation');
          }
          if(entry.target.classList.contains("show-multiple-transform-animation")) {
            entry.target.classList.remove('show-multiple-transform-animation');
          }
          if(entry.target.classList.contains("show-delay-transform-animation")) {
            entry.target.classList.remove('show-delay-transform-animation');
          }
        }
      });
    });

    animationRefs.forEach((el) => observer.observe(el));
  })

  onCleanup(() => {
    animationRefs.forEach((el) => observer.unobserve(el));
  });

  return (
    <main class="App">
      <div class="center full-height">
        <h1>Hello, welcome!</h1>
        <p>I am just here to play around with JavaScript Scroll Animations. &#128513;</p>
        <p>(Please scroll down to see the different animations)</p>
      </div>

      <div class="center full-height">
        <p 
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-opacity-animation"
        >This is an opacity animation!</p>
      </div>

      <div class="center full-height">
        <p 
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-blur-animation"
        >This is a text blur animation!</p>
      </div>

      <div class="center full-height">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-left-transform-animation"
        >This is left transform animation!</p>
      </div>

      <div class="center full-height">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-right-transform-animation"
        >This is right transform animation!</p>
      </div>

      <div class="center full-height">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-multiple-transform-animation"
        >This is adding many animations together!</p>
      </div>

      <div class="center full-height">
        <span class="flex">
          <p
            ref={(element) => {
              if(element) animationRefs.push(element);
            }}
            class="delay hidden-delay-transform-animation"
          >Try&nbsp;</p>
                    <p
            ref={(element) => {
              if(element) animationRefs.push(element);
            }}
            class="delay hidden-delay-transform-animation"
          >delaying&nbsp;</p>
                    <p
            ref={(element) => {
              if(element) animationRefs.push(element);
            }}
            class="delay hidden-delay-transform-animation"
          >the&nbsp;</p>
                    <p
            ref={(element) => {
              if(element) animationRefs.push(element);
            }}
            class="delay hidden-delay-transform-animation"
          >animations!</p>
        </span>
      </div>
    </main>
  );
};

export default App;
