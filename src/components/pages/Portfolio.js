import React from "react";
import Unity, {UnityContext, UnityContext} from "react-unity-webgl";

const UnityContext = new UnityContext({
  loaderUrl:"../public/webgl/Build/myunityapp.loader.js",
  dataURL: "../public/webgl/Build/myunityapp.data",
  frameworkUrl: "../public/webgl/Build/myunityapp.framework.js",
  codeUrl: "../public/webgl/Build/myunityapp.wasm",
});

const App = () => {
  return <Unity unityContext={unityContext} />
}
export default function Portfolio() {
  return (
    <div className="content-portfolio">
      Portfolio
    </div>
  )
}