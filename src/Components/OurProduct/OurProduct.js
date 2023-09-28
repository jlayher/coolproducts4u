import React from 'react'
import './ourproduct.css'


const OurProduct = () => {
  return (
    <div className='ourproduct_container_container'>
    <div className='ourproduct_container'>
      <h1 className='ourproduct_container_title'>
        Our Product
      </h1>

      <div className='ourproduct_container_body'>
        <div className='ourproduct_container_body_image_container'>
          <div className='ourproduct_container_body_image_container_image'>An Image Here</div>
        </div>
        <div className='ourproduct_container_body_text_container'>
          <div className='ourproduct_container_body_text_container_summary'>
            Summary section of product and a bunch of words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquet ante, quis suscipit lorem. Suspendisse semper vel lorem nec venenatis. Morbi nibh ex, egestas a hendrerit in, efficitur nec purus. Duis ornare ac nunc non faucibus. Sed eros sem, fermentum nec condimentum id, lacinia non velit. Nullam pulvinar ipsum id tortor dapibus, et sollicitudin diam molestie. Phasellus porttitor turpis vitae justo iaculis varius. Cras.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquet ante, quis suscipit lorem. Suspendisse semper vel lorem nec venenatis. Morbi nibh ex, egestas a hendrerit in, efficitur nec purus. Duis ornare ac nunc non faucibus. Sed eros sem, fermentum nec condimentum id, lacinia non velit. Nullam pulvinar ipsum id tortor dapibus, et sollicitudin diam molestie. Phasellus porttitor turpis vitae justo iaculis varius. Cras.
            </div>
          <div className='ourproduct_container_body_text_container_list'>
            <ul>
              <li>Something bullet point</li>
              <li>Something bullet point</li>
              <li>Something bullet point</li>
              <li>Something bullet point</li>
              <li>Something bullet point</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default OurProduct
