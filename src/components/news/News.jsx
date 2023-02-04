import React from 'react'
import './news.style.scss';
function News() {
  return (
    <div className='news-container'>
        <div   className="news-image"/>
        <div className='news'>
            <h1>New</h1>
            <div className='new'>
                <h3 className='new-title'>Hydrogen Vs Electric Cars</h3>
                <p>
                    Will hydrogen-fueled cars ever catch up to EVs?
                </p>
            </div>

            <div className='new'>
                <h3 className='new-title'>The Downsides of AI Artistry</h3>
                <p>
                What are the possible adverse effects of on-demand AI image generation?

                </p>
            </div>

            <div className='new'>
                <h3 className='new-title'>Is VC Funding Drying Up?</h3>
                <p>
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
        </div>
        <h1 className='title'>
            The bright future of web 3.0?
        </h1>
        <div className='new-paragraph'>
            <p>
                We dive into the next evolution fo the we that calims to put the power of the platforms back into the hands of the pepole. But is it really fullfilling its promise?
            </p>
            <a href='#' className='btn'>READ MORE</a>
        </div>
    </div>
  )
}

export default News