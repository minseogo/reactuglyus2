import React from 'react';


import Mainbanner from './yys/Mainbanner';

import Review from './gms/Review';
import Map from './pyj/map/Map';

// import Form from './pyj/form/Form';

function Maincontent() {
    return (
        <>
            <Mainbanner cls="스와이퍼슬라이드" />
            <Review />
            {/* 
            <Store /> */}
            {/* 
            
            <Recipe /> */}
            <Map /> 
            
            {/* <Form /> */}
         </>
      
    );
}

export default Maincontent;

