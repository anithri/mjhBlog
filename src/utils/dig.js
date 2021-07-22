export const dig = (keys, obj) => keys.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, obj)
