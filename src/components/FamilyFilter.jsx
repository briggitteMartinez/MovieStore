import React from 'react'
import '../styles/familyfilter.css';
import Row from './Row';
import movieLists from '../movieLists';
import '../styles/home.css';
import ImgSliderFamily from './ImgSliderFamily';
import RowFamily from './RowFamily';


function Family() {
    return (
        <div className="familyfilterContainer">
        <ImgSliderFamily />
        <Row title="Top Family Movies" 
             category={ movieLists.topfamilyMovies }
             rowId="rowSeven"
             id="topfamilyMovies"/>
        <Row title="Animated Movies" 
             category={ movieLists.animatedMovies }
             rowId="rowFive"
             id="animatedMovies"/>
        <RowFamily />
        <Row title="Family Movies" 
             category={ movieLists.familyMovies }
             rowId="rowSeven"
             id="familyMovies"/>
              <Row title="Adventures Movies" 
             category={ movieLists.adventuresMovies }
             rowId="rowSeven"
             id="adventuresMovies"/>
                <Row title="New Family Movies" 
             category={ movieLists.newFamilyMovies }
             rowId="rowFive"
             id="newFamilyMovies"/>
          
       
   </div>
    )
}


export default Family;