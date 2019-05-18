const ICONS = {
  arrowDown: `M14.309 25.628l-13.604-13.604c-0.94-0.94-0.94-2.461
  0-3.391l2.261-2.261c0.94-0.94 2.461-0.94 3.391 0l9.643 9.643
  9.643-9.643c0.94-0.94 2.461-0.94 3.391 0l2.261 2.261c0.94 0.94
  0.94 2.461 0 3.391l-13.604 13.604c-0.92 0.94-2.441 0.94-3.381 0z`,
  arrowLeft: `M6.387 14.3l13.596-13.596c0.93-0.94 2.449-0.94 3.389
  0l2.249 2.279c0.94 0.93 0.94 2.449 0 3.389l-9.637 9.637 9.637
  9.637c0.94 0.93 0.94 2.449 0 3.389l-2.259 2.259c-0.93 0.94-2.449
  0.94-3.389 0l-13.596-13.596c-0.94-0.94-0.94-2.459 0.010-3.399z`,
  arrowRight: `M25.623 17.7l-13.596 13.596c-0.94 0.94-2.459 0.94-3.389
  0l-2.259-2.259c-0.94-0.94-0.94-2.459 0-3.389l9.637-9.637-9.637-9.637c
  -0.94-0.94-0.94-2.459 0-3.389l2.249-2.279c0.94-0.94 2.459-0.94 3.389
  0l13.596 13.596c0.95 0.94 0.95 2.459 0.010 3.399z`,
  arrowUp: `M17.691 6.372l13.604 13.604c0.94 0.94 0.94 2.461 0 3.391l
  -2.261 2.261c-0.94 0.94-2.461 0.94-3.391 0l-9.643-9.643-9.643 9.643c-0.94
  0.94-2.461 0.94-3.391 0l-2.261-2.261c-0.94-0.94-0.94-2.461 0-3.391l13.604
  -13.604c0.92-0.94 2.441-0.94 3.381 0v0z`,
  cancelCircle: `M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16 16-7.161
  16-16-7.161-16-16-16zM23.845 20.2c0.303 0.303 0.303 0.794 0
  1.097l-2.555 2.548c-0.303 0.303-0.794 0.303-1.097 0l-4.194-4.232-4.2
  4.232c-0.303 0.303-0.794 0.303-1.097 0l-2.548-2.555c-0.303-0.303-0.303-0.794
  0-1.097l4.232-4.194-4.232-4.2c-0.303-0.303-0.303-0.794
  0-1.097l2.555-2.555c0.303-0.303 0.794-0.303 1.097 0l4.194
  4.239 4.2-4.232c0.303-0.303 0.794-0.303 1.097 0l2.555 2.555c0.303
  0.303 0.303 0.794 0 1.097l-4.239 4.194 4.232 4.2z`,
  caretDown: `M2.153 6.924h27.694c1.916 0 2.874 2.314 1.518 3.67l-13.841
  13.852c-0.84 0.84-2.206 0.84-3.046 0l-13.841-13.852c-1.356-1.356-0.398
  -3.67 1.518-3.67z`,
  caretUp: `M0.636 21.406l13.841-13.852c0.84-0.84 2.206-0.84 3.046 0l13.841
  13.852c1.356 1.356 0.398 3.67-1.518 3.67h-27.694c-1.916 0-2.874
  -2.314-1.518-3.67z`,
  chart: `M20.8 20h2.4c0.4 0 0.8-0.4 0.8-0.8v-8.4c0-0.4-0.4-0.8-0.8-0.8h
  -2.4c-0.4 0-0.8 0.4-0.8 0.8v8.4c0 0.4 0.4 0.8 0.8 0.8zM26.8 20h2.4c0.4 0
  0.8-0.4 0.8-0.8v-14.4c0-0.4-0.4-0.8-0.8-0.8h-2.4c-0.4 0-0.8 0.4-0.8 0.8v14.4c0
  0.4 0.4 0.8 0.8 0.8zM8.8 20h2.4c0.4 0 0.8-0.4 0.8-0.8v-4.4c0-0.4-0.4
  -0.8-0.8-0.8h-2.4c-0.4 0-0.8 0.4-0.8 0.8v4.4c0 0.4 0.4 0.8 0.8 0.8zM14.8
  20h2.4c0.4 0 0.8-0.4 0.8-0.8v-12.4c0-0.4-0.4-0.8-0.8-0.8h-2.4c-0.4 0-0.8
  0.4-0.8 0.8v12.4c0 0.4 0.4 0.8 0.8 0.8zM31 24h-27v-19c0-0.553
  -0.447-1-1-1h-2c-0.552 0-1 0.447-1 1v21c0 1.104 0.896 2 2 2h29c0.552 0
  1-0.448 1-1v-2c0-0.552-0.448-1-1-1z`,
  checkmark: 'M27 3.5l-15 15-7-7-5 5 12 12 20-20z',
  list: [
    'M0 1.6h32v3.2h-32v-3.2z',
    'M0 8h32v3.2h-32v-3.2z',
    'M0 14.4h32v3.2h-32v-3.2z',
    'M0 20.8h32v3.2h-32v-3.2z',
    'M0 27.2h32v3.2h-32v-3.2z',
    'M3.2 1.6h3.2v28.8h-3.2v-28.8z',
  ],
  menu: `M1.143 7.143h29.714c0.631 0 1.143-0.512 1.143-1.143v-2.857c0-0.631
  -0.512-1.143-1.143-1.143h-29.714c-0.631 0-1.143 0.512-1.143 1.143v2.857c0
  0.631 0.512 1.143 1.143 1.143zM1.143 18.571h29.714c0.631 0 1.143-0.512
  1.143-1.143v-2.857c0-0.631-0.512-1.143-1.143-1.143h-29.714c-0.631 0-1.143
  0.512-1.143 1.143v2.857c0 0.631 0.512 1.143 1.143 1.143zM1.143 30h29.714c0.631
  0 1.143-0.512 1.143-1.143v-2.857c0-0.631-0.512-1.143-1.143-1.143h-29.714c
  -0.631 0-1.143 0.512-1.143 1.143v2.857c0 0.631 0.512 1.143 1.143 1.143z`,
  minus: `M26.65 18.681h-17.3c-0.287 0-0.531-0.1-0.738-0.3-0.2-0.2
  -0.3-0.45-0.3-0.738v-3.287c0-0.287 0.1-0.531 0.3-0.738 0.2-0.2 0.45
  -0.3 0.738-0.3h17.3c0.288 0 0.531 0.1 0.738 0.3 0.2 0.2 0.3 0.45 0.3
  0.738v3.287c0 0.288-0.1 0.531-0.3 0.738-0.206 0.2-0.45 0.3-0.738 0.3z`,
  plus: `M27.625 17.475c0 0.288-0.1 0.531-0.3 0.738-0.2 0.2-0.45 0.3
  -0.738 0.3h-5.969v5.969c0 0.288-0.1 0.531-0.3 0.738-0.2 0.2-0.45 0.3
  -0.738 0.3h-3.288c-0.288 0-0.531-0.1-0.738-0.3-0.2-0.2-0.3-0.45-0.3
  -0.738v-5.969h-5.969c-0.287 0-0.531-0.1-0.738-0.3-0.2-0.2-0.3-0.45
  -0.3-0.738v-3.287c0-0.287 0.1-0.531 0.3-0.738 0.2-0.2 0.45-0.3 0.738
  -0.3h5.969v-5.969c0-0.287 0.1-0.531 0.3-0.737 0.2-0.2 0.45-0.3 0.738
  -0.3h3.288c0.288 0 0.531 0.1 0.738 0.3 0.2 0.2 0.3 0.45 0.3
  0.737v5.969h5.969c0.288 0 0.531 0.1 0.738 0.3 0.2 0.2 0.3 0.45 0.3
  0.738v3.287z`,
  search: `M31.562 27.666l-6.231-6.231c-0.281-0.281-0.662-0.437-1.062
  -0.437h-1.019c1.725-2.206 2.75-4.981 2.75-7.999 0-7.181-5.818-12.999
  -12.999-12.999s-12.999 5.818-12.999 12.999 5.818 12.999 12.999 12.999c3.018
  0 5.793-1.025 7.999-2.75v1.019c0 0.4 0.156 0.781 0.437 1.062l6.231 6.231c0.587
  0.587 1.537 0.587 2.119 0l1.769-1.769c0.587-0.587 0.587-1.537 0.006
  -2.125zM13.002 20.998c-4.418 0-7.999-3.575-7.999-7.999 0-4.418 3.575-7.999
  7.999-7.999 4.418 0 7.999 3.575 7.999 7.999 0 4.418-3.575 7.999-7.999 7.999z`,
  star: `M30.361 10.945l-8.739-1.274-3.906-7.919c-0.7-1.412-2.727-1.43-3.433 0l
  -3.906 7.919-8.739 1.274c-1.567 0.227-2.195 2.159-1.059 3.266l6.322 6.161
  -1.495 8.703c-0.269 1.573 1.388 2.751 2.775 2.016l7.818-4.109 7.818
  4.109c1.388 0.73 3.044-0.443 2.775-2.016l-1.495-8.703 6.322-6.161c1.136
  -1.107 0.508-3.038-1.059-3.266zM22.017 19.366l1.418 8.278-7.435-3.906-7.435
  3.906 1.418-8.278-6.017-5.862 8.314-1.208 3.72-7.536 3.72 7.536 8.314
  1.208-6.017 5.862z`,
  starSolid: `M14.283 1.751l-3.906 7.919-8.739 1.274c-1.567 0.227-2.195
  2.159-1.059 3.266l6.322 6.161-1.495 8.703c-0.269 1.573 1.388 2.751 2.775
  2.016l7.818-4.109 7.818 4.109c1.388 0.73 3.044-0.443 2.775-2.016l-1.495-8.703
  6.322-6.161c1.136-1.107 0.508-3.038-1.059-3.266l-8.739-1.274-3.906-7.919c-0.7
  -1.412-2.727-1.429-3.433 0z`,
  truck: `M0 21.6v1.6c0 0.44 0.36 0.8 0.8 0.8h2.4c0 2.65 2.15 4.8 4.8 4.8s4.8
  -2.15 4.8-4.8h6.4c0 2.65 2.15 4.8 4.8 4.8s4.8-2.15 4.8-4.8h0.8c1.325 0 2.4
  -1.075 2.4-2.4v-16c0-1.325-1.075-2.4-2.4-2.4h-16c-1.325 0-2.4 1.075-2.4
  2.4v2.4h-2.205c-0.635 0-1.245 0.255-1.695 0.705l-4.995 4.995c-0.45 0.45
  -0.705 1.060-0.705 1.695v5.405h-0.8c-0.44 0-0.8 0.36-0.8 0.8zM21.6 24c0
  -1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4-1.075 2.4-2.4 2.4-2.4-1.075
  -2.4-2.4zM5.6 24c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4-1.075
  2.4-2.4 2.4-2.4-1.075-2.4-2.4zM4 15.395l4.995-4.995h2.205v5.6h-7.2v-0.605z`,
  user: `M16 16c4.419 0 8-3.581 8-8s-3.581-8-8-8-8 3.581-8 8 3.581 8 8 8zM21.6
  18h-1.044c-1.387 0.637-2.931 1-4.556 1s-3.162-0.363-4.556-1h-1.044c-4.638 0
  -8.4 3.762-8.4 8.4v2.6c0 1.656 1.344 3 3 3h22c1.656 0 3-1.344 3-3v-2.6c0-4.637
  -3.762-8.4-8.4-8.4z`,
};

export default ICONS;