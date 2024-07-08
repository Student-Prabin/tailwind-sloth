import React from 'react'

const DisplaySection = () => {
  return (
    <div className=' grid grid-cols-2 place-items-center'>
        <div className='dis-img'>
        <dotlottie-player src="https://lottie.host/27af2812-b66e-470e-aa2b-a691e6b34886/cozAQH3gRT.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
        </div>
        <div className='dis-info space-y-2 '>
            <h1 className='text-3xl font-bold'>Hi I am John</h1>
            <p className='text-pink-800 italic'>Some Dev,Freelancer,Rounder</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, neque ut tinciduntpharetra, massa urna venenatis libero, eu elementum magna nisl sed neque. Vestibulum necnullaolor. Sed in odio eu ex auctor sagittis quis eu magna. In urna tortor, accumsan eu ultricesv, placerat vel eros. Suspendisse egestas lacus vehu et, tempus condimentum dolor. Nunc pulvinar laoreet sem, eget malesuada nulla aliquet sed. Proin et ipsum vitae lacus bibendum venenatis eu vel lacus. Sed rhoncus tristique semper.</p>
        </div>
    </div>
  )
}

export default DisplaySection