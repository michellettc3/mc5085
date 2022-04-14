const flowers = [
    {
      name: "Tulip",
      color: "yellow",
      image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
      name: "Daffodil",
      color: "yellow",
      image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
      name: "Sunflower",
      color: "yellow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
      name: "Bluebell",
      color: "blue",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
      name: "Rose",
      color: "red",
      image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
  ];


  const ul = dcoument.querySelector('ul')

  function renderFlowersToPage(flowers){
      for(i = 0; i < flowers.length; i++){
          let list_item = document.createElement("li");
          list_item

          let 
      }
  }

  renderFlowersToPage(flowers)

  const filterBtns = document.querySelector('.filters');
  const cards = document.querySelector('card')

  function filterFn(event){
    console.log('clicked', event.target)
    const filterValue = event.target.getAttribute('data-filter');

    console.log('clicked', filterValue)

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === "all"{
        cards[i].classList.remove("hide");
        cards[i].classList.add("show");
      })
    }
  }