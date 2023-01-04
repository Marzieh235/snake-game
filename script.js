

const Gamecanvas = document.querySelector('Gamecanvas');
const ctx = Gamecanvas.getcontext('2d');


ctx.fillstyle = 'white';
ctx.strokestyle = 'black';


ctx.fillrect(20, 20, Gamecanvas.with, Gamecanvas.height);
ctx.strokeRect(0, 0, Gamecanvas.with, Gamecanvas.height)