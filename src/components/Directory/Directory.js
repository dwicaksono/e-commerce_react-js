/* eslint-disable */

import React, { useEffect, useState } from 'react'
import MenuItem from '../MenuItem/MenuItem.js'
import './directory.scss'


const Directory = () => {
  const [menusection, setSections] = useState([])

  const dataSections = () => {
    setSections([
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ])
  }

  useEffect(() => {
    dataSections()
  }, [])

  if (menusection.length) {
    return (
      <div className="directory-menu">
        {menusection.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />
        })}
      </div>
    )
  } else {
    return (
      <div>
        ....loading
      </div>
    )
  }


}


export default Directory