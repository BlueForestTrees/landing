var anim;
var elem = document.getElementById('bm');
var animData = {
    container: elem,
    renderer: 'svg',
    loop: false,
    rendererSettings: {
        progressiveLoad: false
    },
    path: 'animes/ecrasement_v3.json'
};
anim = bodymovin.loadAnimation(animData);
