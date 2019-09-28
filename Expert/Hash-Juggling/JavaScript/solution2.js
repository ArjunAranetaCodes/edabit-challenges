const hashOps = S => (
  H = x => require('crypto').createHash('sha256').update(x).digest`hex`,
  H((h = H(S.join``)).replace(/\d/g,'') + h.replace(/\D/g,''))
)