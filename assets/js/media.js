/*
 * OPTIONAL MEDIA AND DOWNLOADS — edit this file after uploading assets.
 * Paths are relative to index.html, NOT relative to this JavaScript file.
 * Empty strings keep the placeholders and hide unavailable document/code links.
 * Use matching, case-sensitive filenames. Examples are in README.md.
 */
window.PORTFOLIO = {
  media: {
    portrait: {
      type: "image", src: "assets/images/Portrait_gpt.png", // e.g. "assets/images/portrait.jpg"
      alt: "Portrait of Zenan Zhu", caption: ""
    },
    inekf: {
      type: "video", src: "assets/videos/AIM_video.mp4", // e.g. "assets/images/inekf.jpg"
      alt: "Validation results for the InEKF project",
      caption: "",
    },
    "inekf-acc-video": {
      type: "video", src: "assets/videos/ACC_Exp_vel_v2.mp4", // e.g. "assets/videos/inekf-acc.mp4"
      poster: "",
      alt: "Additional ACC conference video  for the InEKF project",
      caption: "", // "Optional companion video for the ACC 2022 conference paper."
    },
    maml: {
      type: "image", src: "assets/images/experiment condition hardware setup.svg", // e.g. "assets/images/maml.png"
      alt: "MAML framework for gait phase, locomotion mode, and terrain incline estimation",
      caption: "",
    },
    "maml-walking-video": {
      type: "video", src: "assets/videos/MAML_LW_red.mp4",
      poster: "",
      alt: "Walking video for gait and terrain estimation",
      caption: ""
    },
    "joint-ekf": {
      type: "image", src: "assets/images/IROS2023_poster.svg", // e.g. "assets/images/joint-ekf.png"
      alt: "Knee-angle and sensor calibration estimates compared with motion-capture reference data",
      caption: ""
    },
    "reduced-model": {
      type: "image", src: "", // e.g. "assets/images/reduced-model.png"
      alt: "Reduced-order coupled human–exoskeleton model and center-of-mass prediction",
      caption: ""
    },
    rl: {
      type: "video", src: "assets/videos/replay.mp4", // e.g. "assets/videos/replay.mp4"
      poster: "",            // optional: "assets/images/rl-preview.jpg"
      alt: "RL locomotion replay of a simulated human model with Dephy ExoBoots",
      caption: "Simulation demonstration using MyoAssist. Ongoing work; no hardware transfer or assistance-benefit claim."
    },
    "exo-control": {
      type: "image", src: "assets/images/Exo_softsensor_control.png", // e.g. "assets/images/exo-control.png"
      alt: "Fabric-sensor measurements and gait-event-based ankle torque commands",
      caption: ""
    }
  },
  documents: {
    resume: "",        // "assets/documents/Zenan_Zhu_Resume.pdf"
    inekfPaper: "",
    accPaper: "",
    mamlPaper: "",
    mamlPoster: "",
    jointPoster: "https://www.thetracelab.com/uploads/1/1/3/0/113094493/zhu2023irosposter.pdf",
    icraPoster: "https://robotics.cs.uml.edu/fileadmin/content/publications/2022/ICRA2022-workshop-abstract.pdf",
    controlPoster: "https://par.nsf.gov/servlets/purl/10570954",
    modelNote: "",
    rlNote: ""
  },
  code: {
    inekf: "", maml: "", "joint-ekf": "", "reduced-model": "", rl: "", "exo-control": ""
  },
  social: {
    github: "https://github.com/ZenanZhu" // e.g. "https://github.com/YOUR-USERNAME"
  }
};
