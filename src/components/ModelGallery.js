import { useEffect, useState } from 'react';
import '@google/model-viewer';
import Scrollbars from 'react-custom-scrollbars-2';
import './modelviewer.css';
import { MODELS } from './Models';

export default function ModelGallery() {
  const [model, setModel] = useState(MODELS[0]);
  const [cameraPos, setCameraPos] = useState(model.cameraPos);

  useEffect(() => {
    setCameraPos(model.cameraPos);
  }, [model]);

  return (
    <div className="model-gallery">
      <div className="model-gallery-view">
        <model-viewer
          src={model.model}
          ios-src=""
          alt=""
          camera-controls
          camera-orbit={cameraPos}
          ar
        ></model-viewer>
      </div>
      <div className="scrollable">
        <Scrollbars>
          <div className="model-gallery-thumbnails">
            {MODELS.map((thumb, i) => (
              <div
                className="model-gallery-thumbnail"
                key={i}
                style={
                  {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    backgroundImage: `url(${thumb.thumbnail})`,
                  }
                }
                onClick={()=>setModel(MODELS[i])}
              >
                
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
      
      <div className="model-gallery-text">
        <h2>{model.header}</h2>
        {model.text}
      </div>

    </div>
  )
}
