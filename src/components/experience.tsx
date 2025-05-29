import React from "react";


import bestGroupImg from "../assets/Media/Best group.png";
import kepesertaanImg from "../assets/Media/Kepesertaan.jpg";
import lombaPosterImg from "../assets/Media/Lomba_Poster_SIA_Design_Competittion.jpg";
import panitiaHimatekImg from "../assets/Media/Panitia LK HIMATEK.jpeg";
import panitiaWamikaImg from "../assets/Media/Panitia LK WAMIKA.png";
import penanggungJawabBEMImg from "../assets/Media/Penanggung jawab BEM.jpeg";
import penghargaanDiskominfoImg from "../assets/Media/Penghargaan Diskominfo.jpg";
import pesertaWamikaImg from "../assets/Media/Peserta LK WAMIKA.jpeg";
import stupenImg from "../assets/Media/Stupen.png";

import "../assets/css/experience.css";


const certificates = [
  {
    year: "-2024-",
    title: "Penghargaan Best Group oleh PT Gama Multi Usaha Mandiri",
    image: bestGroupImg,
  },
  {
    year: "2024",
    title: "Sertifikat kepesertaan Kampus Merdeka",
    image: kepesertaanImg,
  },
  {
    year: "2024",
    title: "Sertifikat Peserta Lomba Poster SIA Design Competition",
    image: lombaPosterImg,
  },
  {
    year: "2023",
    title: "Sertifikat Panitia LK HIMATEK",
    image: panitiaHimatekImg,
  },
  {
    year: "2024",
    title: "Sertifikat Panitia LK WAMIKA",
    image: panitiaWamikaImg,
  },
  {
    year: "2024",
    title: "Sertifikat Sebagai Penanggung Jawab Pada Kegiatan Pengabdian Masyarakat",
    image: penanggungJawabBEMImg,
  },
  {
    year: "2024",
    title: "Sertifikat Penghargaan Diskominfo Sulawesi Selatan",
    image: penghargaanDiskominfoImg,
  },
  {
    year: "2024",
    title: "Peserta LK WAMIKA",
    image: pesertaWamikaImg,
  },
  {
    year: "2024",
    title: "Sertifikat Studi Independent",
    image: stupenImg,
  },
];


const CertificateList: React.FC = () => {
  return (
    <section id="certificates" className="experience-certificates">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map(({ year, title, image }, index) => (
          <div key={index} className="certificate-card">
            <img src={image} alt={title} className="certificate-img" />
            <div className="certificate-overlay">
              <div className="certificate-text">
                <strong>{year}</strong>
                <p>{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateList;
