<script>
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#art-gallery img.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    
    function showImage(index) {
      if(index < 0) index = images.length - 1;
      if(index >= images.length) index = 0;
      currentIndex = index;
      const img = images[index];
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
    }
    
    images.forEach((img, i) => {
      img.addEventListener('click', () => showImage(i));
    });
    
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    
    prevBtn.addEventListener('click', () => {
      showImage(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      showImage(currentIndex + 1);
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', e => {
      if(lightbox.style.display === 'flex') {
        if(e.key === 'Escape') {
          lightbox.style.display = 'none';
        } else if(e.key === 'ArrowLeft') {
          showImage(currentIndex - 1);
        } else if(e.key === 'ArrowRight') {
          showImage(currentIndex + 1);
        }
      }
    });
  });
</script>
