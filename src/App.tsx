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
          if(entry.target.classList.contains("hidden-typewriter-animation")) {
            entry.target.classList.add('show-typewriter-animation');
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
          if(entry.target.classList.contains("show-typewriter-animation")) {
            entry.target.classList.remove('show-typewriter-animation');
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
      <div class="center full-height content">
        <h1>Hello, welcome!</h1>
        <p>I am just here to play around with pure CSS/JavaScript Scroll Animations. 
          Animations are played when you scroll to them, and hidden when you scroll away from them.
          Please note that if your system minimizes amount of non-essential motion, you will not see the animations.
          Otherwise, please have fun and enjoy! More complex animations to come in the future! &#128513;
        </p>
        <p>(Please scroll down to see the different animations!)</p>
      </div>

      <div class="center full-height content">
        <p 
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-opacity-animation"
        >This is an opacity animation! &#128526;</p>
      </div>

      <div class="center full-height content">
        <p 
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-blur-animation"
        >This is a text blur animation! &#128565;</p>
      </div>

      <div class="center full-height content">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-left-transform-animation"
        >This is left transform animation! &#128073;</p>
      </div>

      <div class="center full-height content">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-right-transform-animation"
        >This is right transform animation! &#128072;</p>
      </div>

      <div class="center full-height content">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-multiple-transform-animation"
        >Lets add opacity, blur, and left transform animations together! &#128079;</p>
      </div>

      <div class="center full-height content">
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
          >animations!&nbsp;</p>
          <p
            ref={(element) => {
              if(element) animationRefs.push(element);
            }}
            class="delay hidden-delay-transform-animation"
          >&#9200;</p>
        </span>
      </div>

      <div class="center full-height content">
        <p
          ref={(element) => {
            if(element) animationRefs.push(element);
          }}
          class="hidden-typewriter-animation"
        >Maybe a cool typewriter animation?</p>
      </div>
    </main>
  );
};

export default App;
