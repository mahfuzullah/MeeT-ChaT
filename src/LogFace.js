import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Card } from 'react-bootstrap';
import { CognitiveServicesCredentials } from 'ms-rest-azure-js';
import { FaceClient,  } from '@azure/cognitiveservices-face';



const IntervalExample = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imgSrc);

    const blob = await (await fetch(imageSrc)).blob(); 
    console.log(blob);
    const faceKey = "1ef64ada8ee84855bd1ebba5b90ce7c0";
    const faceEndPoint = "https://apurba.cognitiveservices.azure.com/";

    const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
  const client = new FaceClient(cognitiveServiceCredentials, faceEndPoint);
  const url =
    "https://pbs.twimg.com/profile_images/3354326900/3a5168f2b45c07d0965098be1a4e3007.jpeg";
  const options = {
    returnFaceLandmarks: true
  };
  //client.face.detectWithStream()
  client.face
    .detectWithStream(blob, options)
    .then(result => {
      if (result.length > 0) {
        console.log("face found");
        localStorage.setItem("username", "Apurba");
        localStorage.setItem("password", "a");
        window.location.reload();
      }
      else {
        console.log("face not found");
      }
    })
    .catch(err => {
      console.log("An error occurred:");
      console.error(err);
    });



  }, [webcamRef, setImgSrc]);
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      capture();

      setSeconds(seconds => seconds + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="Logface">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"

      />
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
      <header className="App-header">
        {seconds}0 seconds have elapsed since mounting.

      </header>
    </div>
  );
};

const useFaceApi = () => {

};

export default function Logface() {






  return (
    <Card>
      <IntervalExample />
      {
        //<img src={process.env.PUBLIC_URL + '/Galib.jpg'} />
      }
    </Card>
  );
}

