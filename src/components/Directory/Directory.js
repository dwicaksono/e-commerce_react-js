/* eslint-disable */

import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDiretorySection } from "../../redux/directory/directorySelector";
import "./directory.scss";

const Directory = ({ sections }) => (
  // ini kalau menggunakan hook function params kosong,
  // const [menusection, setSections] = useState([])
  // const dataSections = () => {
  //   setSections([
  //     {
  //       title: 'hats',
  //       imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //       id: 1,
  //       linkUrl: 'shop/hats'
  //     },
  //     {
  //       title: 'jackets',
  //       imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //       id: 2,
  //       linkUrl: 'shop/jackets'
  //     },
  //     {
  //       title: 'sneakers',
  //       imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //       id: 3,
  //       linkUrl: 'shop/sneakers'
  //     },
  //     {
  //       title: 'womens',
  //       imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //       size: 'large',
  //       id: 4,
  //       linkUrl: 'shop/womens'
  //     },
  //     {
  //       title: 'mens',
  //       imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //       size: 'large',
  //       id: 5,
  //       linkUrl: 'shop/mens'
  //     }
  //   ])
  // }
  // useEffect(() => {
  //   dataSections()
  // }, [])

  // sekarang ganti pake redux dengan bantuan reselector destructure {params}
  // console.log(menusections);
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySection,
});

export default connect(mapStateToProps)(Directory);
