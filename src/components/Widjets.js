import {  InfoRounded } from '@mui/icons-material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react'
import "../css/widjets.css"

function Widjets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widjets-article">
            <div className="widjets-articleLeft">
                <FiberManualRecordIcon sx={{height: '20px'}}/>    
            </div>            
            <div className="widjets-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>            
        </div>
    )
  return (
    <div className='widjets'>
        <div className="widjets-header">
            <h2>Connectify News</h2>
            <InfoRounded />
        </div>
        {newsArticle("Recession going too far!", "TOP News- 1234 readers")}
        {newsArticle("Google releasing BARD soon", "Tech News- 4234 readers")}
        {newsArticle("Instagram gets paid verification", "Social News- 1234 readers")}
        {newsArticle("Twitter lays off around 10% of its workforce", "Tech News- 9123 readers")}
        {newsArticle("Netflix cuts price in more than 30 countries", "Tech News- 5112 readers")}
    </div>
  )
}

export default Widjets