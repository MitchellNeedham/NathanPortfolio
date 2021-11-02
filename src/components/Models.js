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

//UV MAPS

import chairUVMap from '../images/chair_uv.jpeg';
import chairUVMapHighlighted from '../images/chair_uv_highlighted.jpeg';

// EXTRA

//MODEL SCREENSHOTS

export const MODELS = [
  {
    id: uuidv4(),
    thumbnail: thumbChair,
    model: modelArmChair,
    cameraPos: "-90deg 55deg 2.5m",
    header: 'Blue chair - Textured',
    text: (
      <div>
        <h4>Software Used:</h4>
        <ul>
          <li>Blender - Hard surface blocking, then used subdividing modifer and loop tool to create shape;</li>
          <li>Substance Painter - Used standard library for cloth, painted on fabric normal creases with paint tool.</li>
        </ul>
        <em>Hard surface modeled and UV Unwrape done in Blender, texture's done in substance. 
          Used masks to seperate the legs from the cusions but you can seek I missed two of the bottom feel.
          Creased were painted on normal maps with surface imperfections also mode at the edge of the arm rests (discolouring/dirt along with stronger metalic map.)</em>

        <h4>Personal Feedback</h4>
      <p><i>*Really liked how the UV's turned out using Substance ______, fabric seams blend well in the object. Made a mistake on the bottom of two legs when hand paintig (fabric under legs), would re-sort my layers and masks to fix. Would use more reference images, especially for imperfections to create a more grounded 'used' appearance.</i></p>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbArmChairUV,
    model: modelArmChairUV,
    cameraPos: "-90deg 55deg 2.5m",
    header: 'Blue chair - UV Unwrap',
    text: (
      <div>

      <div className="uv-flex">      
        <div>
          <img src={chairUVMap} alt="UV Map"/>
          <h4>UV Map</h4>
        </div>
        <div>      
          <img src={chairUVMapHighlighted} alt="UV Map"/>
          <h4>UV Map with highlighted shells</h4>
        </div>
      </div>

      
      <h4>Map References:</h4>
        <ul>
          <li>Albedo / Diffuse</li>
          <li>Normal</li>
          <li>Metallic (With Unity Alpha Roughness)</li>
        </ul>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbDoor,
    model: modelDoor,
    cameraPos: "90deg 45deg 10m",
    header: 'Oak door - Textured',
    text: (
      <div>
      <h4>Software Used:</h4>
        <ul>
          <li>Blender - Hard surface modelling, basic subvision of cube to create shapes of door, hindges and handles.</li>
          <li>Substance Painter - Used standard material library from Substance painter, hand painted on screws for hindges. Baked normal and curvature map. </li>
        </ul>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbDoorUV,
    model: modelDoorUV,
    cameraPos: "35deg 90deg 10m",
    header: 'Oak door - UV Unwrap',
    text: (
      <div>
      <h4>Map References:</h4>
        <ul>
          <li>Albedo / Diffuse</li>
          <li>Normal</li>
          <li>Metallic (With Unity Alpha Roughness)</li>
        </ul>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbPackage,
    model: modelPackage,
    cameraPos: "45deg 55deg 2.5m",
    header: 'Delivery Package - Textured',
    text: (
      <div>
        <h4>Software Used:</h4>
        <ul>
          <li>Blender - Hard surfaced a high poly version, then duplicated and decimated into a lower game ready model. UV Unwrapped.</li>
          <li>Substance Painter - Textured with personal image of cardboard, added logo's from google / box references and painted tape creases using normal maps.</li>
        </ul>
      </div>
    ),
  },
  {
    id: uuidv4(),
    thumbnail: thumbPackageUV,
    model: modelPackageUV,
    cameraPos: "45deg 55deg 2.5m",
    header: 'Delivery Package - UV Unwrap',
    text: (
      <div>
      <h4>Map References:</h4>
        <ul>
          <li>Albedo / Diffuse</li>
          <li>Normal</li>
          <li>Metallic (With Unity Alpha Roughness)</li>
        </ul>
      </div>
    ),
  }
];
