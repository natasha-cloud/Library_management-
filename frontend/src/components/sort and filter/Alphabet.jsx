import React from 'react'

const Alphabet = () => {

    const alphabet = ['A', 'B', 'C', 'D', 'E',
                     'F', 'G', 'H', 'I', 'J', 'K',
                      'L', 'M', 'N', 'O', 'P', 'Q',
                       'R', 'S','T', 'U', 'V','W', 'X', 
                       'Y', 'Z']

    const alphabet_list = alphabet.map(letter => <swiper-slide class='letter fw-bold' key={letter}>{ letter } </swiper-slide>)
    
  return (
    <div className='my-3 raw alphabet '>
        <div className="col my-2">
            <button className="btn fw-bold reset rounded ">Reset <i className='bi bi-arrow-down fw-bold' ></i> </button>
        </div>
        <div className='col my-2'>
            <swiper-container class='alphabet-container' slides-per-view='10' navigation='true'  style={{'--swiper-navigation-size': '30px'}} >
              {alphabet_list}
            </swiper-container>
        </div>
    </div>
  )
}

export default Alphabet
