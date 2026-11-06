---
title: "County-Level Food Insecurity & Health Outcomes"
date: 2026-02-18
tags:
  - project
  - machine-learning
  - public-health
status: "shipped"
draft: false
---

# Predicting Food Insecurity & Chronic Disease Across U.S. Counties

> Graduate ML project that predicts county-level food insecurity and diabetes prevalence and flags obesity hotspots, using 270+ USDA socioeconomic and food-access indicators.

**Repo:** [github.com/aksh-ay06/Machine-Learning-Fall-2025](https://github.com/aksh-ay06/Machine-Learning-Fall-2025) · **Stack:** scikit-learn, pandas, SciPy, Matplotlib

---

## Approach

- **Custom sklearn pipeline:** converts sentinel codes (−9999, −8888) to NaN, drops features with more than 40% missing values, applies median imputation, then standardizes.
- **Nested cross-validation:** a 5-fold outer loop estimates generalization error and a 3-fold inner GridSearch tunes hyperparameters, so the tuning never sees the evaluation folds.
- **Unsupervised structure:** PCA reduced 255 features to 48 components (80% of variance), and k-means (k=4) grouped counties into four distinct profiles relevant to policy.
- **Stability:** 200 bootstrap resamples gave confidence intervals for the metrics and showed which features stay important across resamples (CV 0.02–0.05).

## Results

| Target | Model | R² |
|---|---|---|
| Food insecurity (2021–23) | Gradient Boosting | ~0.62 |
| Diabetes prevalence (2019) | Gradient Boosting | ~0.62 |

The strongest predictors of food insecurity were participation in WIC and school breakfast programs, along with historical food-insecurity levels.

---

[[projects/index|← All Projects]]
