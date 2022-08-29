import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { SRLWrapper } from '@bimbeo160/simple-react-lightbox';

function App() {

  const [image, setImage] = useState('');
  const [result, setResult] = useState([]);
  const ACCESS_KEY = 'd5t9BdvCvLDrmV2EuGK7gVh3MXhJv_4TqG0SEElzzhk';

  const getValue = (e) => {
    setImage(e.target.value);
    console.log(e.target.value)
  }

  const getImages = () => {
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + ACCESS_KEY;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response.data.results)
    })
  }

  return (
    <SRLWrapper>
      <>
        <h1 className='title'>📷 React Image Search with Unsplash API</h1>
        <form className='formSection'>
          <input
            type="text"
            placeholder="Search images..."
            name="image"
            className='searchInput'
            onChange={getValue}
          />
          <button className='searchBtn' type='button' onClick={getImages}>
            Search
          </button>
        </form>

        <div className='results'>
          {result.map((image, id) => (
            <div className='image-card' key={image.id}>
              <span className='image-location'>📍 {image.user.location}</span>
              <LazyLoadImage
                className="image-result"
                src={image.urls.full}
                effect="opacity"
                delayTime="300"
              />
              <p className='image-name'>📷: {image.user.name}</p>
            </div>
          ))}
        </div>
      </>
    </SRLWrapper>
  )
}

export default App;