---
id: f25_auto_pr_bot
sidebar_position: 2
title: "Auto PR Review Assistant"
---

# Auto PR Review Assistant

### Project Info

| **Term:**         | Fall 2025                               |
| ----------------- | --------------------------------------- |
| **Project Lead:** | Bryan Kuang                             |
| **Team Members:** | Samiksha S., Nathan, Raymond Z, Anushka |

### **Project Description**

This Discord bot automates the code review process by connecting directly to GitHub. It provides developers with instant feedback on pull requests, including line-change metrics and AI-generated summaries. The project involved significant architectural optimization, moving from blocking requests to a fully asynchronous event loop to handle high volumes of repository events.

### **Key Features**

- **AI-Driven Summaries:** Generates formatted commit summaries using Deepseek AI.
- **Automated Metrics:** Calculates total lines added and removed for every contributor and pull request.
- **Recommendation Scoring:** Provides an AI-generated score (0–100) to help leads prioritize reviews.
- **Smart Filtering:** Automatically excludes mock data and binary files from AI analysis to optimize token usage.
- **Async Optimization:** Implementation of aiohttp and removal of nested asyncio.run calls for better performance.
