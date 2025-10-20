import React from "react";
import styles from "./Machinery.module.css";

import CircularGallery from "../../utilities/CircularGallery";

import bobcat from "../../assets/imgs/machinery/bobcat.jpg";
import doka from "../../assets/imgs/machinery/doka.jpg";
import forklift from "../../assets/imgs/machinery/forklift.avif";
import mixer from "../../assets/imgs/machinery/mixer.avif";
import roller from "../../assets/imgs/machinery/roller.jpg";
import servicelift from "../../assets/imgs/machinery/servicelift.avif";
import toneloader from "../../assets/imgs/machinery/toneloader.jpg";
import towercrane from "../../assets/imgs/machinery/towercrane.jpg";
import watertanker from "../../assets/imgs/machinery/watertanker.jpg";

import plateCompactor from "../../assets/imgs/tools/platecompactor.jpg";
import barbending from "../../assets/imgs/tools/barbending.webp";
import benchcutter from "../../assets/imgs/tools/benchcutter.jpg";
import generator from "../../assets/imgs/tools/generator.webp";
import hilti from "../../assets/imgs/tools/hilti.jpeg";
import hiltidrill from "../../assets/imgs/tools/hiltidrill.avif";
import powerfloat from "../../assets/imgs/tools/powerfloat.jpg";
import stellcutting from "../../assets/imgs/tools/steelcutting.jpg";
import vibrator from "../../assets/imgs/tools/vib.avif";

import mason from "../../assets/imgs/workers/mason.webp";
import tileMason from "../../assets/imgs/workers/tilemason.jpg";
import carpenter from "../../assets/imgs/workers/carpenter.jpg";
import steelFixer from "../../assets/imgs/workers/steelfixer.jpg";
import painter from "../../assets/imgs/workers/painter.webp";
import plumber from "../../assets/imgs/workers/plumber.jpg";
import operator from "../../assets/imgs/workers/operators.png";
import labourUnskilled from "../../assets/imgs/workers/helper.jpg";
import staff from "../../assets/imgs/workers/staff.avif";

const Machinery = () => {
  const machinery = [
    { image: bobcat, text: "Bobcat" },
    { image: doka, text: "Doka" },
    { image: forklift, text: "Forklift" },
    { image: mixer, text: "Mixer" },
    { image: roller, text: "Roller" },
    { image: servicelift, text: "Service Lift" },
    { image: toneloader, text: "Tone Loader" },
    { image: towercrane, text: "Tower Crane" },
    { image: watertanker, text: "Water Tanker" },
  ]
  const tools = [
    { image: plateCompactor, text: "Plate Compactor" },
    { image: barbending, text: "Bar Bending Machine" },
    { image: benchcutter, text: "Bench Cutter" },
    { image: generator, text: "Generator" },    
    { image: hilti, text: "Hilti" },
    { image: hiltidrill, text: "Hilti Drill" },
    { image: powerfloat, text: "Power Float" },
    { image: stellcutting, text: "Steel Cutting Machine" },
    { image: vibrator, text: "Vibrator" },    
  ]
  const workers = [
    { image: mason, text: "Mason" },
    { image: tileMason, text: "Tile Mason" },
    { image: carpenter, text: "Carpenter (Shuttering)" },
    { image: steelFixer, text: "Steel Fixer" },
    { image: painter, text: "Painters" },
    { image: plumber, text: "Plumbers" },
    { image: operator, text: "Operator" },
    { image: labourUnskilled, text: "Labour Unskilled" },
    { image: staff, text: "Staff" },
  ];
  return (
    <section className={styles.machinery}>
      <h2 className={styles.goldHighlight}>Our Machinery and Workforce</h2>
      <div style={{ height: "500px", position: "relative" }}>
        <CircularGallery
          bend={0}
          textColor="black"
          borderRadius={0.05}
          scrollEase={0.02}
          gallery={machinery}
        />
      </div>
      <div style={{ height: "400px", position: "relative" }}>
        <CircularGallery
          bend={0}
          textColor="black"
          borderRadius={0.05}
          scrollEase={0.02}
          gallery={tools}
        />
      </div>
      <div style={{ height: "300px", position: "relative" }}>
        <CircularGallery
          bend={0}
          textColor="black"
          borderRadius={0.05}
          scrollEase={0.02}
          gallery={workers}
        />
      </div>
    </section>
  );
};

export default Machinery;
