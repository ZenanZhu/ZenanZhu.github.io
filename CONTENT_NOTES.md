# Content notes and source record

This file helps the owner and coding assistants keep the website accurate. It is not linked from the homepage. If you upload it to a public repository it is nevertheless public; do not add private information here.

## Editorial choices

The English and Chinese résumés supplied in this conversation contain corresponding research descriptions. The site rewrites those descriptions in English and expands them using the prelim presentation/report and available paper/poster material. The more recent final paper takes precedence when it differs from prelim material. Current résumés take precedence over old projected graduation timelines. No predicted graduation date is displayed.

The public site uses "Ph.D. researcher" at Purdue. The UMass Lowell 2020–2022 entry is "Doctoral study and graduate research", not an assertion that a second Ph.D. was awarded.

## Sources used

### InEKF
- Zhu, Sorkhabadi, Gu, and Zhang. "Design and Evaluation of an Invariant Extended Kalman Filter for Trunk Motion Estimation With Sensor Misalignment." IEEE/ASME Transactions on Mechatronics 27(4), 2158–2167, 2022.
- DOI: <https://doi.org/10.1109/TMECH.2022.3175988>
- Author preprint and publication record: <https://arxiv.org/abs/2205.07800>
- Prelim report, Chapter 3, especially the group-affine process model, non-invariant measurement update, observability discussion, and experimental limitations.
- Note: the résumés use "Human Locomotion Estimation" in the journal title; the site uses the publication's "Trunk Motion Estimation" title.

### MAML
- Final publisher paper: "Model-Agnostic Meta-Learning for Adaptive Gait Phase and Terrain Geometry Estimation With Wearable Soft Sensors." IEEE Robotics and Automation Letters 11(5), 5757–5764, May 2026. First published online March 19, 2026.
- DOI: <https://doi.org/10.1109/LRA.2026.3675944>
- Final paper, Section IV-D and Table I (PDF page 6): 3.5 s calibration data and four fine-tuning steps. Mean results: 0.85 gait accuracy, 1.00 locomotion accuracy, and 2.67 degrees incline RMSE. Calibration is condition-specific and labeled.
- Final paper Table I and discussion, rather than older approximate memory or the prelim, determine the displayed values.
- The site retains equal contribution for Zenan Zhu and Wenxi Chen.

### Joint-angle EKF
- "Joint Angle Estimation Using Soft Wearable Sensor Measurement", IROS 2023 poster.
- Formulation targets hip/knee angles, sensor gains/offsets, and IMU states. The poster's raw-fabric-sensor result estimates the left knee only. The four-joint objective is not treated as a completed validation result.

### Reduced-order human–exoskeleton modeling
- The supplied English/Chinese résumés describe a reduced-order coupled model for center-of-mass estimation and torque planning.
- Prelim slide material on SLIP modeling, contact constraints, and recursive least-squares parameter estimation supports a preliminary modeling description.
- No model-based hardware performance metric or completed controller validation is asserted.

### Soft-sensor-driven control
- "Exoskeleton Controller Based on Soft Sensor Inputs", AIM 2024 poster/extended abstract, and prelim report Chapter 5.
- The preliminary implementation connects fabric-sensor gait events to a polynomial ankle torque command.
- Transformer-based estimation and meta-learning personalization are described as a proposed/ongoing framework based on the current résumés, not a completed multi-subject benefit study.

### Reinforcement-learning replay
- The owner describes an RL-trained human model with Dephy ExoBoots using MyoAssist.
- The site intentionally does not specify an unconfirmed algorithm, reward, action space, model dimensionality, training duration, contribution to base software, or measured benefit.
- MyoAssist source framework: <https://myoassist.neumove.org/>.
- Ask the owner what was trained (human policy, exoskeleton policy, or both), what they changed, and what evaluations were run before making more detailed claims.

### Education, teaching, tools, and contact
- Based on the supplied October 2026 résumés.
- The website does not repeat course-enrollment counts; these are not essential to the research portfolio.
- Public email: akitonan@outlook.com, as printed on both résumés.
- Scholar link was taken from the English résumé hyperlink annotation.
- LinkedIn uses the profile slug in the résumé; its malformed PDF-relative link was normalized to an HTTPS profile link. The owner should confirm it opens the intended profile.
- No actual GitHub username was supplied. Its link is blank until confirmed.

## Review before launch

Confirm the desired job-search headline and email, current résumé, accurate individual contributions, and permissions for every uploaded figure, video, and PDF. Replace or remove unused placeholders. Review the exact RL training setup before expanding that project. Confirm whether to add an IROS 2026 presentation entry once the owner selects the final poster/talk details.

The starter does not upload or redistribute any source PDFs, deck files, or videos automatically.
