import React from 'react'
import AdFormBody from '../../components/ads/AdFormBody';
import AboutItem from '../../components/ads/AboutItem';
import ItemDetails from '../../components/ads/ItemDetails';
import AdConfirm from '../../components/ads/AdConfirm';
import { createContext } from 'react';

const AdContext = createContext();

const PostAd = () => {


  return (
    <div>
        <AdFormBody title="Post Ad" >
            <AboutItem/>
            {/* <ItemDetails/> */}
            {/* <AdConfirm/> */}
        </AdFormBody>
    </div>
  )
}

export default PostAd