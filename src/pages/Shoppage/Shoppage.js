import React, { useEffect, useState } from 'react'
import '../Shoppage/shoppage.scss'
import CollectionPreview from '../../components/PreviewCollection/PreviewCollection'
import SHOPDATA from './shopdata.js'


const ShopPage = () => {
  const [shopdata, setShopdata] = useState([])
  useEffect(() => {
    setShopdata(SHOPDATA)
  }, [])
  return (
    <div className='shop-page'>
      {shopdata.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
    </div>
  )
}

export default ShopPage