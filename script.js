const torch = document.querySelector('#torch');
const root = document.documentElement;
let dragging = false;

function moveLight(x, y) {
    const px = Math.max(0, Math.min(x, window.innerWidth));
    const py = Math.max(0, Math.min(y, window.innerHeight));
    root.style.setProperty('--light-x', px + "px");
    root.style.setProperty('--light-y', py + "px");
}

torch.addEventListener('pointerdown', (e) => {
    dragging = true;
    torch.setPointerCapture(e.pointerId);
});

torch.addEventListener('pointermove', (e) => {
    if (dragging) {
        moveLight(e.clientX, e.clientY);
    }
});

torch.addEventListener('pointerup', (e) => {
    dragging = false;
    torch.releasePointerCapture(e.pointerId);
});