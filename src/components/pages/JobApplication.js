import ModelGallery from "../ModelGallery";
import "./page.css";

export default function JobApplication() {
  return (
    <div className="page-content">
      <h2 align="center" >Junior 3D Artist Portfolio - League of Geeks</h2>
      <a href="/webgl" align="right">Launch WebGL Demo (in new tab)</a>
      <ModelGallery />
    </div>
  )
};