document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;
    const imagesPerGroup = 4;

    function showImages(startIndex) {
       images.forEach((img, i) => {
           if(i >= startIndex && i < startIndex + imagesPerGroup){
               img.classList.add('active');
           } else {
             img.classList.remove('active')
           }
         });
    }

   showImages(0) //initial images

    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % (images.length - imagesPerGroup + 1)

        showImages(currentIndex);
    });
   prevButton.addEventListener('click', function(event) {
         event.preventDefault();

        currentIndex = (currentIndex - 1 + (images.length - imagesPerGroup + 1)) % (images.length - imagesPerGroup + 1)
       showImages(currentIndex);
    });
  });

  document.getElementById('phoneInput').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (input.length === 0) {
        e.target.value = '';
        return;
    }
    // Add +7 for the first digit and format the rest
    let formattedNumber = '+7 ';
    if (input.length > 1) {
        formattedNumber += '(' + input.slice(1, 4);
        if (input.length > 4) {
            formattedNumber += ') ' + input.slice(4, 7);
            if (input.length > 7) {
                formattedNumber += '-' + input.slice(7, 9);
                if (input.length > 9) {
                    formattedNumber += '-' + input.slice(9, 11);
                }
            }
        }
    } else {
        formattedNumber += input[0];
    }
    e.target.value = formattedNumber;
});

