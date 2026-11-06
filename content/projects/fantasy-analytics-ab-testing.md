---
title: "Fantasy Sports Product Analytics & A/B Testing"
date: 2026-11-01
tags:
  - project
  - analytics
  - experimentation
status: "shipped"
draft: false
---

# Fantasy Sports Product Analytics

> A complete analytics workflow modeled on a product data analyst role: data pipeline → metrics layer → A/B test analysis → EDA → interactive dashboard.

**Repo:** [github.com/aksh-ay06/analytics](https://github.com/aksh-ay06/analytics) · **Stack:** DuckDB, nfl_data_py, pandas, SciPy, Streamlit, Jupyter

---

## What's Inside

- **Pipeline:** pulls 5 NFL seasons (2020–2024) into DuckDB, roughly 28K weekly stat rows, 229K roster rows, and 131K snap-count rows. The data is modeled as dimension and fact tables for skill positions in the regular season.
- **Metrics:** rolling averages, boom/bust rates, and the coefficient of variation as a measure of consistency.
- **Experiment analysis** (on simulated experiment data):

| Metric | Test |
|---|---|
| Waiver claim rate (primary) | Two-proportion z-test, Wald CI, Cohen's h |
| Claims per user | Welch's t-test, Cohen's d |
| Lineup set rate, season retention | Two-proportion z-tests |
| Novelty effect | Week-by-week lift |
| Heterogeneity | Per-segment tests (user type, league type) |

- **Dashboard:** a multi-page Streamlit app with KPIs, a player explorer, leaderboards, and an experiment results page.

---

[[projects/index|← All Projects]]
