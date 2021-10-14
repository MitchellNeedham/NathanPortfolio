import '@google/model-viewer';
import { v4 as uuidv4 } from 'uuid';
import Scrollbars from 'react-custom-scrollbars-2';
import modelArmChair from '../models/ArmchairForMitch_quickfix.glb';
import modelDoor from '../models/DoorForMitch.glb';
import './modelviewer.css';

import placeholder from '../images/placeholder.jpg';
import { useState } from 'react';

const MODELS = [
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
    text: 'Hello',
  },
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelDoor,
    cameraPos: "45deg 90deg 10m",
  },
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
  },
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelDoor,
    cameraPos: "45deg 90deg 10m",
  },
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
  },
  {
    id: uuidv4(),
    thumbnail: placeholder,
    model: modelDoor,
    cameraPos: "45deg 90deg 10m",
  }
]

export default function ModelGallery() {
  const [model, setModel] = useState(1);

  return (
    <div className="model-gallery">
      <div className="scrollable">
        <Scrollbars
          
        >
          <div className="model-gallery-thumbnails">
            {MODELS.map((thumb, i) => (
              <div
                className="model-gallery-thumbnail"
                key={i}
                style={
                  {
                    backgroundImage: `url(${placeholder})`,
                  }
                }
                onClick={()=>setModel(i)}
              >
                
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
      <div className="model-gallery-view">
        <model-viewer
          src={MODELS[model].model}
          ios-src=""
          alt=""
          camera-controls
          camera-orbit={MODELS[model].cameraPos}
          ar
        ></model-viewer>
      </div>
      <div className="model-gallery-text">
        Text
      </div>

    </div>
  )
}
