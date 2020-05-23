
function mouCercle(C, R, A, dA) { //C=centre, R=radi, A=angleinicial, dA=canvi en l'angle a cada iteracio
  pilota.A = A + dA;
  pilota.p.x = C.x + R*Math.cos(A);
  pilota.p.y = C.y + R*Math.sin(A);
}
