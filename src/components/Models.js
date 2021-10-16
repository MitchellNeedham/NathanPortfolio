import { v4 as uuidv4 } from 'uuid';

// MODELS

import modelArmChair from '../models/armchair.glb';
import modelArmChairUV from '../models/armchair_uv.glb';
import modelDoor from '../models/door.glb';
import modelDoorUV from '../models/door_uv.glb';
import modelPackage from '../models/package.glb';
import modelPackageUV from '../models/package_uv.glb';

// THUMBNAILS


import thumbChair from '../images/armchair_thumbnail.jpg';
import thumbArmChairUV from '../images/armchair_uv_thumbnail.jpg';
import thumbDoor from '../images/door_thumbnail.jpg';
import thumbDoorUV from '../images/door_uv_thumbnail.jpg';
import thumbPackage from '../images/package_thumbnail.jpg';
import thumbPackageUV from '../images/package_uv_thumbnail.jpg';

// EXTRA

export const MODELS = [
  {
    id: uuidv4(),
    thumbnail: thumbChair,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
    header: 'Cool chair',
    text: (
      <div>
        <em>Hello there</em>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbArmChairUV,
    model: modelArmChairUV,
    cameraPos: "-90deg 55deg 2.5m",
    header: 'Cool chair',
    text: (
      <div>
        <em>Hello there</em>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbDoor,
    model: modelDoor,
    cameraPos: "35deg 90deg 10m",
    header: 'Nice door',
    text: (
      <p>Hello</p>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbDoorUV,
    model: modelDoorUV,
    cameraPos: "35deg 90deg 10m",
    header: 'Nice door',
    text: (
      <p>Hello</p>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbPackage,
    model: modelPackage,
    cameraPos: "45deg 55deg 2.5m",
    header: 'Package',
    text: (
      <p>Hello</p>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbPackageUV,
    model: modelPackageUV,
    cameraPos: "45deg 55deg 2.5m",
    header: 'Package',
    text: (
      <p>Hello</p>
    ),
  }
];