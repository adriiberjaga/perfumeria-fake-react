import React from 'react'
import '../css/Banner.css'
import video from '../../images/video-main.mp4'
export default function Banner() {
  return (
    <div className="container">
    {/* Video de fondo */}
    <video autoPlay loop muted className="background-video">
      <source  src={video} type="video/mp4" />
      Tu navegador no soporta videos.
    </video>

    {/* Capa de oscurecimiento */}
    <div className="overlay"></div>

    {/* Contenido */}
    <div className="content">
      <h1 className="title">Descubre Tu Esencia</h1>
      <p className="subtitle">Fragancias que dejan huella.</p>
      <button className="cta-button">Explorar colección</button>
    </div>
  </div>
);

}
