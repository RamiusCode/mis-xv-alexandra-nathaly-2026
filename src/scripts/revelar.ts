// Aparición suave de las secciones al hacer scroll.
// Se importa desde cada componente; Astro lo incluye una sola vez.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function iniciar() {
  gsap.utils.toArray<HTMLElement>(".revelar").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciar);
} else {
  iniciar();
}
