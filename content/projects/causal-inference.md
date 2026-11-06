---
title: "Causal Inference: Estimating Treatment Effects from Observational Data"
date: 2026-01-29
tags:
  - project
  - causal-inference
  - statistics
status: "shipped"
draft: false
---

# Causal Impact Analysis from Observational Data

> Estimates the causal effect of smoking on health outcomes with three families of estimators, then stress-tests the results. The data is synthetic but BRFSS-like, with **known ground-truth effects**, so each estimator can be checked against the true answer.

**Repos:** [Causal](https://github.com/aksh-ay06/Causal) · [What-If lifestyle explorer](https://github.com/aksh-ay06/What-if) · **Stack:** EconML, DoWhy, statsmodels, scikit-learn, Streamlit

---

## Methods

| Method | Estimands |
|---|---|
| Propensity Score Matching | ATE, ATT |
| Inverse Probability of Treatment Weighting | ATE, ATT |
| Doubly Robust (AIPW via EconML) | ATE, ATT, CATE |

The framework is the Rubin potential-outcomes model, with identification through backdoor adjustment on a DAG drawn from domain knowledge.

## Diagnostics (the part most analyses skip)

- Covariate balance checks with standardized mean differences and Love plots
- Overlap and positivity checks on the propensity scores
- **Rosenbaum bounds** and **E-values** to measure how strong unmeasured confounding would need to be to change the conclusion
- Placebo-treatment permutation tests and negative-control outcomes (falsification checks)
- Unit tests for every estimator and diagnostic module

## Companion App: Personal What-If

A Streamlit app that answers questions like *"what if I slept one more hour?"* It uses a lifestyle DAG with DoWhy for identification and **EconML LinearDML** for personalized (heterogeneous) effects. DoWhy refutation tests (placebo treatment, random common cause, data subset) appear as trust indicators next to every estimate.

---

[[projects/index|← All Projects]]
