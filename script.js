document.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    // ✅ Moves the background slightly for a parallax effect
    document.querySelector('.cityscape').style.transform = `translate(-50%, ${y * 5}px) scale(1.1)`;
});

// ✅ Adds a glowing flicker effect
setInterval(() => {
    document.querySelector('.glitch').style.textShadow =
        Math.random() > 0.5
            ? "0 0 10px cyan, 0 0 20px magenta"
            : "0 0 20px magenta, 0 0 10px cyan";
}, 500);