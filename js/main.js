$(document).ready(function(){ 
    $('.works-carousel').slick({ 
        infinite: false,
        variableWidth: true,
        dots : false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'> <img src='./img/left.svg'> </button>", 
        nextArrow: "<button type='button' class='slick-next pull-right'> <img src='./img/right.svg'> </button>",
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              arrows: true, 
            } 
          }, 
        ] 
    }); 

    $('#file-input').on('change', function(event) {
        var file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#uploaded-image').attr('src', e.target.result).show();
                $('#submit-button').show();
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
            $('#submit-button').hide();
        }
    });
});

document.getElementById('file-input').addEventListener('change', function(event) {
  const fileName = event.target.files[0] ? event.target.files[0].name : '';
  document.querySelector('.file-item p').textContent = fileName;

  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const uploadedImage = document.getElementById('uploaded-image');
    uploadedImage.src = e.target.result;
    uploadedImage.style.display = 'block';
    document.getElementById('submit-button').style.display = 'block';
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});

document.querySelectorAll('.content-wrapper video').forEach(video => {
      video.addEventListener('mouseover', function() {
        this.play();
      });
      video.addEventListener('mouseout', function() {
        this.pause();
      });
      video.addEventListener('touchstart', function() {
        this.play();
      });
      video.addEventListener('touchend', function() {
        this.pause();
      });
    });

document.querySelector('.btn-outline-light').addEventListener('click', function() {
  const siteLink = window.location.href;
  navigator.clipboard.writeText(siteLink).then(() => {
    this.textContent = 'Link Copied!';
    this.classList.add('copied');
    setTimeout(() => {
      this.textContent = 'Share';
      this.classList.remove('copied');
    }, 2000);
  });
});