<script>
const personagens = [
    '',
    'https://i.imgur.com/6088b93a.png', // Devish
    'https://storage.ko-fi.com/cdn/useruploads/display/c50d3062-d554-4ec5-bef7-83a0ce4aafdc_sketch-1747804611242.png', // Vouliber
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101108566_YTPqmzgINHIKUHX.png', // Mayhem
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101109425_f6HFZvEpZdhIVvj.png', // Xanthe
    'https://f2.toyhou.se/file/f2-toyhou-se/images/85169678_UUHJKmE135sEBGU.png', // Fantoccio
    'https://f2.toyhou.se/file/f2-toyhou-se/images/80109278_OOaFL3CGFSXmAGf.png', // Christopher
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101108566_YTPqmzgINHIKUHX.png', // Coda
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101109425_f6HFZvEpZdhIVvj.png', // Retro
    'https://f2.toyhou.se/file/f2-toyhou-se/images/85169678_UUHJKmE135sEBGU.png', // Staffo
    'https://f2.toyhou.se/file/f2-toyhou-se/images/80109278_OOaFL3CGFSXmAGf.png', // Cassy
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101108566_YTPqmzgINHIKUHX.png', // Razzle and Dazzle
    'https://f2.toyhou.se/file/f2-toyhou-se/images/101109425_f6HFZvEpZdhIVvj.png'  // Murmur
];

function abrirPopupPersonagem(idx) {
    document.getElementById('popup-personagem-src').src = personagens[idx];
    document.getElementById('popup-personagem').classList.add('active');
}

function fecharPopupPersonagem(e) {
    if (e.target.id === 'popup-personagem' || e.target.classList.contains('popup-close')) {
        document.getElementById('popup-personagem').classList.remove('active');
        document.getElementById('popup-personagem-src').src = '';
    }
}
</script>
