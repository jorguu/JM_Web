// =====================================================================
//  Pinta el contenido de content.js en la página y añade las interacciones.
//  Para cambiar textos no hace falta tocar este archivo: edita content.js.
// =====================================================================
(() => {
  "use strict";

  const RAW = window.SITE_CONTENT;
  if (!RAW) return;

  const LANGS = RAW.idiomas.disponibles;
  const DEFAULT_LANG = RAW.idiomas.porDefecto;
  const STORAGE_KEY = "jm-web-lang";

  let lang = DEFAULT_LANG;
  let C = {};   // Contenido ya traducido al idioma actual

  // ---------- Utilidades ----------
  const $ = (id) => document.getElementById(id);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function setText(id, value) {
    const node = $(id);
    if (node) node.textContent = value || "";
  }

  // Enlaces externos se abren en otra pestaña
  function setLink(a, url) {
    a.href = url;
    if (/^https?:\/\//.test(url)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }

  // Botón o enlace con texto + dirección
  function setButton(id, { texto, enlace }) {
    const a = $(id);
    a.textContent = texto;
    setLink(a, enlace);
  }

  const pad = (n) => String(n).padStart(2, "0");

  // ---------- Idiomas ----------

  // Cambia cada { es, de, en } por el texto del idioma elegido
  function localize(node, l) {
    if (Array.isArray(node)) return node.map((n) => localize(n, l));
    if (node && typeof node === "object") {
      if (Object.hasOwn(node, DEFAULT_LANG)) {
        return localize(node[l] ?? node[DEFAULT_LANG], l);
      }
      return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, localize(v, l)]));
    }
    return node;
  }

  // Orden: ?lang= en la dirección, elección guardada, idioma del navegador
  function initialLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    const candidates = [
      new URLSearchParams(location.search).get("lang"),
      saved,
      (navigator.language || "").slice(0, 2),
    ];
    return candidates.find((l) => LANGS.includes(l)) || DEFAULT_LANG;
  }

  function setLang(l) {
    lang = l;
    C = localize(RAW, l);
    document.documentElement.lang = l;
    renderAll();
    observeReveals();
    updateActiveLink();
  }

  function initLangSelect() {
    const select = $("lang-select");
    LANGS.forEach((code) => {
      const option = el("option", "", code.toUpperCase());
      option.value = code;
      select.appendChild(option);
    });
    select.value = lang;
    select.addEventListener("change", () => {
      setLang(select.value);
      try { localStorage.setItem(STORAGE_KEY, select.value); } catch {}
      const url = new URL(location.href);
      url.searchParams.set("lang", select.value);
      history.replaceState(null, "", url);
    });
  }

  // ---------- Contenido ----------
  function renderSite() {
    const { sitio } = C;
    document.title = sitio.tituloPestana || sitio.nombre;
    document.querySelector('meta[name="description"]').content = sitio.descripcion || "";
    setText("nav-logo", sitio.sello);
    setText("nav-brand", sitio.nombre);
    // Sin nombre, el logo necesita una etiqueta para los lectores de pantalla
    // (debe incluir el texto visible del logo, p. ej. "JM – Inicio")
    const home = $("nav-home");
    if (sitio.nombre) home.removeAttribute("aria-label");
    else home.setAttribute("aria-label", [sitio.sello, sitio.etiquetaInicio].filter(Boolean).join(" – "));
    setText("nav-toggle", sitio.botonMenu);
    $("nav-menu").setAttribute("aria-label", sitio.etiquetaMenu);
    $("lang-select").setAttribute("aria-label", sitio.etiquetaIdioma);
  }

  function renderAnnounce() {
    const { aviso } = C;
    setText("announce-text", aviso.texto);
    setButton("announce-link", { texto: aviso.enlaceTexto, enlace: aviso.enlace });
  }

  function renderNav() {
    const list = $("nav-list");
    list.replaceChildren();
    C.menu.forEach(({ texto, enlace }) => {
      const li = el("li");
      const a = el("a", "nav__link", texto);
      setLink(a, enlace);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function renderHero() {
    const { portada } = C;
    setText("hero-tagline", portada.lema);

    const title = $("hero-title");
    title.replaceChildren();
    [].concat(portada.titulo).forEach((word) => title.appendChild(el("span", "", word)));

    setText("hero-subtitle", portada.subtitulo);
    setText("hero-text", portada.texto);
    setButton("hero-primary", portada.botonPrincipal);
    setButton("hero-secondary", portada.botonSecundario);
    setText("hero-status", portada.estado);
  }

  function renderAbout() {
    const { sobreMi } = C;
    const heading = $("intro-heading");
    heading.replaceChildren();
    [].concat(sobreMi.titulo).forEach((line) => heading.appendChild(el("span", "", line)));

    setText("intro-text", sobreMi.texto);
    setText("intro-tools-title", sobreMi.herramientasTitulo);
    const tools = $("intro-tools");
    tools.replaceChildren();
    sobreMi.herramientas.forEach((name) => tools.appendChild(el("li", "", name)));
  }

  function renderProjects() {
    const { proyectos } = C;
    setText("projects-title", proyectos.titulo);
    setText("projects-intro", proyectos.intro);
    setText("projects-count", pad(proyectos.lista.length));

    const list = $("projects-list");
    list.replaceChildren();
    proyectos.lista.forEach((p, i) => {
      const li = el("li", "project reveal");
      li.style.setProperty("--d", i);
      const card = el(p.enlace ? "a" : "article", "project__card");
      if (p.enlace) setLink(card, p.enlace);

      // Parte de arriba: imagen o, si no hay, el gráfico de cuadrados
      const visual = el("div", "project__visual");
      if (p.imagen) {
        const img = el("img");
        img.src = p.imagen;
        img.alt = p.imagenAlt || p.titulo;
        img.loading = "lazy";
        img.decoding = "async";
        visual.appendChild(img);
      } else {
        visual.classList.add("project__visual--empty");
      }
      visual.append(el("span", "project__index", pad(i + 1)));
      if (p.estado) visual.append(el("span", "chip", p.estado));

      const body = el("div", "project__body");
      body.append(el("h3", "project__title", p.titulo), el("p", "project__desc", p.descripcion));

      const tags = el("ul", "project__tags");
      (p.etiquetas || []).forEach((t) => tags.appendChild(el("li", "chip", t)));
      body.appendChild(tags);

      const meta = el("p", "project__meta");
      [p.fecha, p.credito].filter(Boolean).forEach((m) => meta.appendChild(el("span", "", m)));
      body.appendChild(meta);
      if (p.enlace) body.appendChild(el("span", "link-arrow", proyectos.verProyecto));

      card.append(visual, body);
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  function renderServices() {
    const { servicios } = C;
    const visible = servicios.lista.filter((s) => s.mostrar !== false);

    setText("services-title", servicios.titulo);
    setText("services-intro", servicios.intro);
    setText("services-count", pad(visible.length));
    setText("services-note", servicios.nota);
    setButton("services-cta", servicios.boton);

    const list = $("services-list");
    list.replaceChildren();
    visible.forEach((s, i) => {
      const card = el("article", "service reveal");
      card.style.setProperty("--d", i);

      const top = el("div", "service__top");
      top.append(el("span", "", pad(i + 1)));
      if (s.plazo) top.append(el("span", "chip", s.plazo));

      const items = el("ul", "service__list");
      (s.incluye || []).forEach((t) => items.appendChild(el("li", "", t)));

      const bottom = el("div", "service__bottom");
      if (s.precio) bottom.appendChild(el("p", "service__price", s.precio));
      if (servicios.credito) bottom.appendChild(el("p", "service__credit", servicios.credito));

      card.append(
        top,
        el("h3", "service__title", s.titulo),
        el("p", "service__desc", s.descripcion),
        items,
        bottom
      );
      list.appendChild(card);
    });
  }

  function renderHow() {
    const { comoSeHace } = C;
    setText("how-title", comoSeHace.titulo);
    setText("how-intro", comoSeHace.intro);
    const list = $("how-list");
    list.replaceChildren();
    comoSeHace.bloques.forEach((b, i) => {
      const li = el("li", "how__item reveal");
      li.style.setProperty("--d", i);
      li.append(el("h3", "how__title", b.titulo), el("p", "how__text", b.texto));
      list.appendChild(li);
    });
  }

  function renderLab() {
    const { lab } = C;
    setText("lab-title", lab.titulo);
    setText("lab-intro", lab.intro);
    setText("lab-count", pad(lab.lista.length));

    const list = $("lab-list");
    list.replaceChildren();
    lab.lista.forEach((item, i) => {
      const card = el(item.enlace ? "a" : "article", "lab-item reveal");
      card.style.setProperty("--d", i);
      if (item.enlace) setLink(card, item.enlace);

      const top = el("div", "lab-item__top");
      top.appendChild(el("span", "chip", item.estado));
      if (item.fecha) top.appendChild(el("span", "", item.fecha));

      card.append(
        top,
        el("h3", "lab-item__title", item.titulo),
        el("p", "lab-item__note", item.nota)
      );
      if (item.enlace) card.appendChild(el("span", "link-arrow", lab.abrir));
      list.appendChild(card);
    });
  }

  function renderContact() {
    const { contacto } = C;
    setText("contact-label", contacto.etiqueta);
    setText("contact-title", contacto.titulo);
    setText("contact-text", contacto.texto);

    const email = $("contact-email");
    email.textContent = contacto.email;
    email.href = `mailto:${contacto.email}`;

    setText("contact-copy", contacto.botonCopiar);

    const socials = $("contact-socials");
    socials.replaceChildren();
    contacto.redes.forEach(({ texto, enlace }) => {
      const li = el("li");
      const a = el("a", "link-arrow", texto);
      setLink(a, enlace);
      li.appendChild(a);
      socials.appendChild(li);
    });
  }

  function renderFooter() {
    setText("footer-copy", ["©", new Date().getFullYear(), C.sitio.nombre].filter(Boolean).join(" "));
    setText("footer-legal", C.pie.legal);
    setText("footer-credit", C.pie.credito);
  }

  function renderAll() {
    renderSite();
    renderAnnounce();
    renderNav();
    renderHero();
    renderAbout();
    renderProjects();
    renderServices();
    renderHow();
    renderLab();
    renderContact();
    renderFooter();
  }

  // ---------- Interacciones ----------

  // Menú: enlace activo según la sección visible + desplegable en el móvil
  let activeId = null;

  function updateActiveLink() {
    document.querySelectorAll(".nav__link").forEach((a) => {
      const active = a.hash === `#${activeId}`;
      a.classList.toggle("is-active", active);
      if (active) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  function initNav() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeId = entry.target.id;
          else if (activeId === entry.target.id) activeId = null;
        });
        updateActiveLink();
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

    const toggle = $("nav-toggle");
    const menu = $("nav-menu");
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav")) setOpen(false);
    });
  }

  // Gráfico luminoso: cada .lattice recibe sus cuadrados (el estilo está en style.css)
  function initLattices() {
    document.querySelectorAll(".lattice").forEach((box) => {
      for (let i = 0; i < 6; i++) box.appendChild(el("span", "lattice__sq"));
    });
  }

  // Elementos que aparecen suavemente al entrar en pantalla
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach((node) => revealObserver.observe(node));
  }

  // Botón "Copiar email"
  function initCopy() {
    const button = $("contact-copy");
    if (!navigator.clipboard) {
      button.hidden = true;
      return;
    }
    let timer;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(C.contacto.email);
      } catch {
        return;
      }
      button.textContent = C.contacto.copiado;
      button.classList.add("is-done");
      clearTimeout(timer);
      timer = setTimeout(() => {
        button.textContent = C.contacto.botonCopiar;
        button.classList.remove("is-done");
      }, 2000);
    });
  }

  // ---------- Arranque ----------
  function start() {
    lang = initialLang();
    initLangSelect();
    initLattices();
    setLang(lang);

    initNav();
    initCopy();

    // Textos puestos: ya se puede mostrar la página
    document.body.classList.remove("is-loading");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
