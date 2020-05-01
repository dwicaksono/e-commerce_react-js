import React from 'react'
import '../PreviewCollection/previewcollection.scss'
import CollectionItem from '../CollectionItem/CollectionItems.js'

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.filter((item, idx) => idx < 4).map(({ id, ...otherItem }) => (
        <CollectionItem key={id} {...otherItem} />
      ))}
    </div>
  </div>
)

export default PreviewCollection