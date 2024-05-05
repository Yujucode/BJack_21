(() => {
  'use strict';
  let e = document.querySelector('#smolito'),
    t = document.querySelector('#compuPuntos'),
    r = document.querySelector('#btnpedir'),
    a = document.querySelector('#jugador-cartas'),
    l = document.querySelector('#computadora-cartas'),
    s = document.querySelector('#btnnuevo'),
    o = document.querySelector('#btndetener'),
    n = [],
    d = ['C', 'D', 'H', 'S'],
    c = ['A', 'J', 'Q', 'K'],
    i = 0,
    u = 0,
    p = document.querySelector('#btnpedir');
  document.querySelector('#smolito');
  let f = () => {
    n = [];
    for (let e = 2; e < 11; e++) for (let t of d) n.push(e + t);
    for (let r of d) for (let a of c) n.push(a + r);
    return (n = _.shuffle(n)), (n = _.shuffle(n)), (n = _.shuffle(n));
  };
  f();
  let $ = () => {
      if (0 === n.length) throw 'no hay cartas en el deck';
      let e = n.pop();
      return e;
    },
    b = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ('A' === t ? 11 : 10) : 1 * t;
    };
  o.addEventListener('click', () => {
    (r.disabled = !0), (o.disabled = !0), h(i);
  }),
    r.addEventListener('click', () => {
      let t = $();
      (i += b(t)), (e.innerText = i);
      let r = document.createElement('img');
      (r.src = `prof_her/assets/cartas/${t}.png`),
        r.classList.add('CARTA'),
        a.append(r),
        i > 21
          ? ((p.disabled = !0), (o.disabled = !0))
          : 21 === i && ((p.disabled = !0), (o.disabled = !0)),
        setTimeout(() => {
          21 === i ? alert('Ganaste sacaste 21!') : i > 21 && alert('Volaste!');
        }, 100);
    });
  let h = (e) => {
    do {
      let r = $();
      (u += b(r)), console.log('pj--' + u), (t.innerText = u);
      let a = document.createElement('img');
      if (
        ((a.src = `prof_her/assets/cartas/${r}.png`),
        a.classList.add('CARTA'),
        e > 21)
      )
        break;
      l.append(a);
    } while (u < e && e <= 21);
    setTimeout(() => {
      u > 21 && i <= 21
        ? alert('Ganaste')
        : i === u || u > i
        ? alert('gana la Computadora')
        : i > u && alert('Ganaste');
    }, 100);
  };
  s.addEventListener('click', () => {
    location.reload();
  });
})();
