<script>
  document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const imagens = document.querySelectorAll('.galeria-img');

    let currentIndex = 0;

    function showLightbox(index) {
      currentIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = imagens[currentIndex].src;
      lightboxImg.alt = imagens[currentIndex].alt;
    }

    function closeLightbox() {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxImg.alt = '';
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
      lightboxImg.src = imagens[currentIndex].src;
      lightboxImg.alt = imagens[currentIndex].alt;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % imagens.length;
      lightboxImg.src = imagens[currentIndex].src;
      lightboxImg.alt = imagens[currentIndex].alt;
    }

    imagens.forEach((img, idx) => {
      img.addEventListener('click', () => {
        showLightbox(idx);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Navegação pelo teclado
    document.addEventListener('keydown', e => {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
      }
    });
  });
</script>
