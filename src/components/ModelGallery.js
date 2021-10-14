import '@google/model-viewer';
import { v4 as uuidv4 } from 'uuid';
import Scrollbars from 'react-custom-scrollbars-2';
import modelArmChair from '../models/ArmchairForMitch_quickfix.glb';
import modelDoor from '../models/DoorForMitch.glb';
import modelPackage from '../models/PackageForMitch.glb';
import './modelviewer.css';

import thumbDoor from '../images/door.png';
import thumbChair from '../images/chair.png';
import thumbPackage from '../images/package.png';

import { useEffect, useState } from 'react';

const MODELS = [
  {
    id: uuidv4(),
    thumbnail: thumbChair,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
    header: 'Cool chair',
    text: 'Hello',
  },
  {
    id: uuidv4(),
    thumbnail: thumbDoor,
    model: modelDoor,
    cameraPos: "45deg 90deg 10m",
    header: 'Nice door',
    text: 'Hello',
  },
  {
    id: uuidv4(),
    thumbnail: thumbPackage,
    model: modelPackage,
    cameraPos: "45deg 55deg 2.5m",
    header: 'Package',
    text: 'Beutiful work',
  }
];

export default function ModelGallery() {
  const [model, setModel] = useState(0);
  const [cameraPos, setCameraPos] = useState("45deg 90deg 10m");

  useEffect(() => {
    setCameraPos(MODELS[model].cameraPos);
  }, [model]);

  return (
    <div className="model-gallery">
      <div className="model-gallery-view">
        <model-viewer
          src={MODELS[model].model}
          ios-src=""
          alt=""
          camera-controls
          camera-orbit={cameraPos}
          ar
        ></model-viewer>
      </div>
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
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    backgroundImage: `url(${MODELS[i].thumbnail})`,
                  }
                }
                onClick={()=>setModel(i)}
              >
                
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
      
      <div className="model-gallery-text">
        <h2>{MODELS[model].header}</h2>
        <p>{MODELS[model].text}</p>
      </div>

    </div>
  )
}
