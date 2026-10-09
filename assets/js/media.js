/*
 * OPTIONAL MEDIA AND DOWNLOADS — edit this file after uploading assets.
 * Paths are relative to index.html, NOT relative to this JavaScript file.
 * Empty strings keep the placeholders and hide unavailable document/code links.
 * Use matching, case-sensitive filenames. Examples are in README.md.
 */
window.PORTFOLIO = {
  media: {
    portrait: {
      type: "image", src: "", // e.g. "assets/images/portrait.jpg"
      alt: "Portrait of Zenan Zhu", caption: ""
    },
    inekf: {
      type: "image", src: "", // e.g. "assets/images/inekf.jpg"
      alt: "Sensor coordinate frames and validation results for the InEKF project",
      caption: ""
    },
    "inekf-acc-video": {
      type: "video", src: "", // e.g. "assets/videos/inekf-acc.mp4"
      poster: "",
      alt: "Optional ACC conference video or experiment clip for the InEKF project",
      caption: "Optional companion video for the ACC 2022 conference paper."
    },
    maml: {
      type: "image", src: "", // e.g. "assets/images/maml.png"
      alt: "MAML framework for gait phase, locomotion mode, and terrain incline estimation",
      caption: ""
    },
    "joint-ekf": {
      type: "image", src: "", // e.g. "assets/images/joint-ekf.png"
      alt: "Knee-angle and sensor calibration estimates compared with motion-capture reference data",
      caption: ""
    },
    "reduced-model": {
      type: "image", src: "", // e.g. "assets/images/reduced-model.png"
      alt: "Reduced-order coupled human–exoskeleton model and center-of-mass prediction",
      caption: ""
    },
    rl: {
      type: "video", src: "", // e.g. "assets/videos/replay.mp4"
      poster: "",            // optional: "assets/images/rl-preview.jpg"
      alt: "RL locomotion replay of a simulated human model with Dephy ExoBoots",
      caption: "Simulation demonstration using MyoAssist. Ongoing work; no hardware transfer or assistance-benefit claim."
    },
    "exo-control": {
      type: "image", src: "", // e.g. "assets/images/exo-control.png"
      alt: "Fabric-sensor measurements and gait-event-based ankle torque commands",
      caption: ""
    }
  },
  documents: {
    resume: "",        // "assets/documents/Zenan_Zhu_Resume.pdf"
    inekfPaper: "assets/documents/TMECH_AIM_2022.pdf",
    accPaper: "assets/documents/ACC22_1161_FI.pdf",
    mamlPaper: "",
    mamlPoster: "",
    jointPoster: "",
    icraPoster: "",
    controlPoster: "",
    modelNote: "",
    rlNote: ""
  },
  code: {
    inekf: "", maml: "", "joint-ekf": "", "reduced-model": "", rl: "", "exo-control": ""
  },
  social: {
    github: "" // e.g. "https://github.com/YOUR-USERNAME"
  }
};
