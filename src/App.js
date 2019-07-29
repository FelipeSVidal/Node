import React, { useState } from 'react';

function calc_production(materials, product, Nome){
  var total = 0;
  for(var i =0; i<materials.length; i++){
    console.log(materials[i]);
    
      total += materials[i];
    }
    // If product > materials, positive, gain!!!
    total = product - total;
    return total;
}

export default function App(){



  // Materials
  var topaz;
  var gold_sand;
  var magic_ore = 720;
  
  // Products
  var normal_Precision_Stone;

  //hooks
  const [nps, setNps] = useState(0); // Normal precision stone balance
  const [topazs, setTopaz] = useState(0);

  // Coal
  fetch("https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory=&q=Topaz")
      .then(res => res.json())
      .then(
        (result) => {
          topaz = result[0].lastRecord.price;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
      )
  
  // Steel
  fetch("https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory=&q=Gold%20Sand")
      .then(res => res.json())
      .then(
        (result) => {
          gold_sand = result[0].lastRecord.price;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
      )

  // Normal Precision Stone
  fetch("https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory=&q=Normal%20Precision%20Stone")
      .then(res => res.json())
      .then(
        (result) => {
          normal_Precision_Stone = result[0].lastRecord.price;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
      )
  



  return (
          <>
            <button onClick={ 
              () => {setNps(calc_production([topaz, gold_sand, magic_ore], normal_Precision_Stone,'Normal Precision Stone'));
                     setTopaz(2000);}
                    }>
               Normal Precision Stone</button>
            
            <ul>
              <li><text>Normal Precision Stone -> {nps}</text></li>
              <li><text>Normal Precision Stone -> {topazs}</text></li>
            </ul>
          </>
  );
}
