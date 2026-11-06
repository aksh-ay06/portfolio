---
title: "Does Industrial Pollution Predict Cancer? (BRFSS 2023)"
date: 2026-02-08
tags:
  - project
  - statistics
  - public-health
  - machine-learning
status: "shipped"
draft: false
---

# Can State-Level Pollution Improve Prediction of Cancer Prevalence?

> Combines **BRFSS 2023** (433,323 adults) with **EPA P2 Mapping** data (69,416 facilities) to test whether pollution is *associated with* self-reported cancer, and whether it *improves prediction*. The answers turned out to be different.

**Repo:** [github.com/aksh-ay06/BRFSS](https://github.com/aksh-ay06/BRFSS) · **Stack:** samplics, XGBoost, SHAP, scikit-learn

---

## Approach

1. **Design-aware EDA:** BRFSS has a complex survey design (strata, PSUs, and weights). I used `samplics` so population estimates and standard errors account for that design.
2. **Linking the data:** facility-level pollution (TRI, GHG, NEI, RCRA, DMR) was summed by state, log-transformed, and joined to respondents. 99.2% of respondents matched.
3. **Inference:** survey-weighted logistic regression, adjusted for age, sex, race, smoking, comorbidities, education, and urbanicity.
4. **Prediction:** XGBoost with demographics only vs. demographics plus pollution, evaluated with **PSU-grouped stratified CV**. Grouping by PSU keeps respondents from the same survey cluster out of both train and test folds.
5. **Interpretation:** SHAP values for both models.

## Key Findings

- Weighted cancer prevalence: **7.92%** (95% CI 7.76–8.08%).
- NEI air-pollutant emissions were significantly associated with cancer (**OR 1.22**, 95% CI 1.18–1.26). Adding pollution attenuated the urban/rural odds ratio from 0.63 to 0.91.
- Even so, pollution added **no predictive lift**: test ROC-AUC was 0.799 with and without it, and AUPRC was 0.218 in both (2.77× over the base rate).
- In the SHAP rankings, individual factors dominate (age, arthritis, heart disease). State-level exposure is too coarse to help predict individual outcomes.

## Why It Matters

A statistically significant association doesn't guarantee a useful predictive feature. The project uses both lenses deliberately and reports their limits: self-reported outcomes, a cross-sectional design, and only state-level geography in the public data. County-level linkage from the restricted BRFSS files would be the natural next step.

---

[[projects/index|← All Projects]]
