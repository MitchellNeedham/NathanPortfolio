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

//TEXTURE MAPS

import chairAlbedo from '../images/chair_uv.jpeg';
import chairighlighted from '../images/chair_uv_highlighted.jpeg';
import chairMetallic from '../images/chair_metallic.png';
import chairNormal from '../images/chair_normal.jpeg';
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
          <li>Blender - Hard surface modelled, used subdivide modifer and loop tool to create each section of the armchair. UV Unwraped with Smart UV Project and then did hand made corrections for UV islands and vertices. </li>
          <p></p>
          <li>Substance Painter - Used standard material library for cloth, painted on fabric creases using normals and dirt with colour, metellic and roughness.</li>
        </ul>
        <h4>Personal Feedback</h4>
      <p>Proud of how the UV's turned out, espeicall with using Substance ______. Fabric seams blended well in the object. Made a mistake on two of the legs when hand paintig (2 fabric strokes on bottom), would re-sort my layers and masks to fix. In hindsight I'd use more reference images, especially for imperfections to create a more grounded <i>'used'</i> appearance.</p>
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
          <h4>Albedo</h4>
          <img src={chairAlbedo} alt="Albedo Map"/>
        </div>
        <div>      
          <h4>Highlighted shells</h4>
          <img src={chairighlighted} alt="Highlighted UV's"/>
        </div>
      </div>

      <div className="uv-flex">      
        <div>
          <h4>Normal</h4>
          <img src={chairNormal} alt="Normal Map"/>
        </div>
        <div>      
          <h4>Metallic (with Unity roughness alpha)</h4>
          <img src={chairMetallic} alt="Metallic Map"/>
        </div>
      </div>

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
          <li>Blender - Hard surface modelled, basic subvision of cube to create shapes of door, hindges and handles.</li>
          <p></p>
          <li>Substance Painter - Used standard material library from Substance painter, hand painted on screws for hindges. Baked normal and curvature map. </li>
          <h4>Personal Feedback</h4> 
      <p>Doors are relativty simple but handles were something I had to simplify more (not using high poly to low poly technique), also began detailing screws and gaps in the hindges but when putting into consideration the camera distance. I settled for just painting on the screws in Substance Painter.</p>
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
          <p></p>
          <li>Photoshop - Took picture of cardboard box, offset image to show seams and used clone tool to make seamless.</li>
          <p></p>
          <li>Substance Painter - Baked high poly mesh, textured with personal textured of cardboard, added logo's from google / box references and painted tape creases using normal maps.</li>
          <h4>Personal Feedback</h4>
      <p><i>*Really liked how the UV's turned out using Substance ______, fabric seams blend well in the object. Made a mistake on the bottom of two legs when hand paintig (fabric under legs), would re-sort my layers and masks to fix. Would use more reference images, especially for imperfections to create a more grounded 'used' appearance.</i></p>
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
