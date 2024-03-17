const $container = document.getElementById('container')
const $pictures = document.querySelector('.pictures')
const imgArr = []

const imagesObject = [
  {
    src: 'images/bacon_bowtie(300).gif',
    large: 'images/bacon_bowtie.gif',
    caption: '(Image from www.freepik.com) Bowtie bacon pasta, sometimes too strong of a flavour 8/10',
    alt: 'Bowtie Bacon Pasta',
  },

  {
    src: 'images/broccoli_pasta(300).gif',
    large: 'images/broccoli_pasta.gif',
    caption: '(Image from www.freepik.com) Broccoli and cheese pasta, classic 7.5/10',
    alt: 'Broccoli Pasta & Cheese',
  },

  {
    src: 'images/shrimp_pasta(300).gif',
    large: 'images/shrimp_pasta.gif',
    caption: '(Image from www.freepik.com) Shrimp veggie pasta, I do like shrimp but this one is a little too soupy for me, 6/10',
    alt: 'Soup & Shrimp Pasta Dish',
  },

  {
    src: 'images/eggy_ramen(300).gif',
    large: 'images/eggy_ramen.gif',
    caption: '(Image from www.freeimages.com) Eggy ramen, I do not like eggs unfortunately so 4/10',
    alt: 'Eggy Ramen',
  },

  {
    src: 'images/garlic-crab_pasta(300).gif',
    large: 'images/garlic-crab_pasta.gif',
    caption: '(Image from www.freeimages.com) Crab pasta, I do like crab but this is way to much and quite an innconvience 2/10',
    alt: 'Big Crab Pasta Dish',
  },

  {
    src: 'images/green_fettuccine(300).gif',
    large: 'images/green_fettuccine.gif',
    caption: '(Image from www.freeimages.com) Green Fettuccine, I love alfredo, fettuccine and the color green so 10/10',
    alt: 'Green Fettucine Dish',
  },

  {
    src: 'images/kraft_dinner(300).gif',
    large: 'images/kraft_dinner.gif',
    caption: '(Image from www.freeimages.com) Kraft dinner, always 10/10 cannot go wrong',
    alt: 'Kraft Dinner',
  },

  {
    src: 'images/lasagna_pasta(300).gif',
    large: 'images/lasagna_pasta.gif',
    caption: '(Image from www.freeimages.com) Lasagna, like Garfield could have this everyday 10/10',
    alt: 'Lasagna on Plate',
  },

  {
    src: 'images/packet_ramen(300).gif',
    large: 'images/packet_ramen.gif',
    caption: '(Image from www.freeimages.com) Packet ramen can be really good it is a hit or miss so 7.5/10',
    alt: 'Packet Ramen in Bowl',
  },

  {
    src: 'images/peanut_udon(300).gif',
    large: 'images/peanut_udon.gif',
    caption: '(Image from www.freeimages.com) Peanut butter undon obviously 10/10 + 1 if it is spicy',
    alt: 'Peanut Sauce Udon',
  },

  {
    src: 'images/tomato_pasta(300).gif',
    large: 'images/tomato_pasta.gif',
    caption: '(Image from www.freeimages.com) Tomato based pasta, simple and easy but not my favorite 7/10',
    alt: 'Tomato Sauce Pasta',
  },

  {
    src: 'images/tomato_spagetti(300).gif',
    large: 'images/tomato_spagetti.gif',
    caption: '(Image from www.freeimages.com) Tomato based spagetti, I like spagetti better then penne so 8.5/10',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/smoked_salmon(300).gif',
    large: 'images/smoked_salmon.gif',
    caption: '(Image from www.freeimages.com) Smoked salmon noodles, love love love salmon and capers so 11/10',
    alt: 'Smoked Salmon Pasta Dish',
  },

  {
    src: 'images/pad_thai(300).gif',
    large: 'images/pad_thai.gif',
    caption: '(Image from www.freeimages.com) Pad thai, even cheap it is very good so solid 8.5/10',
    alt: 'Pad Thai',
  }
]

for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$container.innerHTML = imgArr.join('')

$container.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $pictures.innerHTML = 
    `<img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.caption}</small>`
  $pictures.classList.add('show')
})

$pictures.addEventListener('click', function () {
  $pictures.classList.remove('show')
})