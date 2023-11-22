import React, { useState, useEffect } from 'react';
import './styles/Watch.css'
function Credits(props) {

    const [credit, setcredit] = useState(null);

    useEffect(() => {
      const detailData = async () => {
        try {
          const response = await fetch(
            'https://api.themoviedb.org/3/movie/251/credits?language=en-US&api_key=13956b67d71217236ba5306171319b71'
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setcredit(data);
          console.log('API Response:', data);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        }
      };
  
      detailData();
    }, []);

    return (
        <section className='details-watch'>
    <div className='details-header'>
    <h2>More Details</h2>
    </div>

    <div className='more-details-container'>
      <div className='more-details-cell'>
        <div className="more-details-label">
          Watch offline
          </div>
        <div className="more-details-item-container">
          <span className="more-details-item item-download">Download and watch everywhere you go.</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div className="more-details-label">
        Genres
          </div>
        <div className="more-details-item-container">
          <span className="more-details-item item-download">Classic Movies, Crime Movies, Drama Movies, Thriller Movies</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div className="more-details-label">
        This movie is...
          </div>
        <div className="more-details-item-container">
          <span className="more-details-item item-download">Violent</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div className="more-details-label">
          Audio
          </div>
        <div className="more-details-item-container">
          <span className="more-details-item item-download">English - Audio Description, English [Original], French</span>
      </div>
      </div>
      <div className='more-details-cell'>
        <div className="more-details-label">
        Subtitles
          </div>
        <div className="more-details-item-container">
          <span className="more-details-item item-download">Arabic, English, French</span>
      </div>
      </div>
    </div>


    <div className="more-details-container-cast">
      <div className="more-details-cell cell-cast">
        <div className="more-details-label">Cast</div>
        <div className="more-details-item-container">
          <span className="more-details-item item-cast">Al Pacino</span>
          <span className="more-details-item item-cast">Steven Bauer</span>
          <span className="more-details-item item-cast">Michelle Pfeiffer</span>
          <span className="more-details-item item-cast">Mary Elizabeth Mastrantonio</span>
          <span className="more-details-item item-cast">Paul Shenar</span>
          <span className="more-details-item item-cast">Robert Loggia</span>
          <span className="more-details-item item-cast" >Miriam Colon</span>
          <span className="more-details-item item-cast">F. Murray Abraham</span>
          <span className="more-details-item item-cast">Harris Yulin</span>
          <span className="more-details-item item-cast">Ángel Salazar</span>
          <span className="more-details-item item-cast">Pepe Serna</span>
        </div>
      </div>
    </div>



  </section>
    );
}

export default Credits;