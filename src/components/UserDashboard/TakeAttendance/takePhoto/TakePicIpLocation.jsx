import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios'; // Import Axios
import './TakePicIpLocation.css';

const TakePicIpLocation = () => {
  const [photo, setPhoto] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [liveTime, setLiveTime] = useState('');

  const webcamRef = useRef(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);

    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;
      setIpAddress(ipAddress);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);

          const currentTime = new Date().toLocaleString();
          setLiveTime(currentTime);

          const base64Photo = imageSrc.split(',')[1];

          const response = await axios.post('http://REST_API_BASE_URL/saveData', {
            photo: base64Photo,
            ipAddress,
            location: `${latitude},${longitude}`,
            liveTime: currentTime,
          });
          console.log('Response:', response.data);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await capture();
  };

  return (
    <div className="Photo_Container">
      <form onSubmit={handleSubmit} className="webPicCapture mb-5 mx-3">
        <Webcam className="webcam" audio={false} ref={webcamRef} />
        <div className="photo_buttons">
          <button className='sub-btn' onClick={capture}>Submit</button>
          <input type="submit" value="Save Photo" />
        </div>
      </form>
    </div>
  );
};

export default TakePicIpLocation;
