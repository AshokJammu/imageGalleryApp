import React from 'react'

export const GalleryList = ({data}) => {

  return (
    <div>
        <h4>GalleryList</h4>
        <div className='row'>
            {data.map((item)=>(
                <div key={item.id}> 
                <div className='col-md-4'>
                     <img alt="" src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} />
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}
