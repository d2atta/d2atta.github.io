---
author: Debarghya Datta
pubDatetime: 2024-08-04T05:00:00Z
title: "[GSoC] Week-9/10 LLM Augmented Extraction Frameowrk"
featured: false
draft: false
tags:
  - gsoc
description: Work done in the 9th & 10th week of GSoC coding period.
---
This is the ninth and tenth week(22-31st July & 1-2nd Aug) of the coding period of GSoC where the main aim was to test different Deep Learning/LLM based models for co-reference resolution and Relation Extraction.
## Table of Contents
## Project Update

In the latest phase of my GSoC project, I’ve made some exciting advancements, particularly in the integration of Large Language Models (LLMs) into our processing pipeline. Here’s a summary of the progress:

- **Implemented LLM-Based Coreference Resolution**: I successfully integrated the “Mistral” model to handle coreference resolution. This allows the model to identify and link mentions of the same entities across different parts of the text.
  
- **Implemented LLM-Based Relation Extraction**: Building on the coreference work, I also used the “Mistral” model to extract relationships between entities, further enriching the structured data we generate.
  
- **LLM Response as JSON**: I’ve also implemented a process to obtain the LLM responses in JSON format, ensuring that the output is structured and easy to integrate into subsequent stages of the pipeline.
  
- **Error Analysis**: After implementing these features, I performed a thorough error analysis on the generated examples to identify areas where the model’s performance could be improved.

## Challenges/Solutions

Working with LLMs presents unique challenges, and here’s how I’ve been tackling them:

- **Hallucinations in LLM Responses**: One of the main issues I encountered is the tendency of LLMs to generate hallucinations, i.e., incorrect or nonsensical outputs. This poses a significant challenge when the goal is accurate information extraction.
  
- **Suggestions from Mentors**: My mentors have suggested using more powerful LLM-based models and leveraging agents to mitigate the hallucination problem. These strategies will be crucial as I refine the pipeline.

## Next Steps

Moving forward, my focus will be on the following tasks:

- **Explore More Powerful LLMs**: I’ll be experimenting with more advanced LLMs to see if they can provide more accurate and reliable outputs, especially for complex tasks like relation extraction.
  
- **Implement Agents for Hallucination Management**: To address the issue of hallucinations, I’ll investigate using agents that can guide the LLMs toward more factual and relevant responses.

These next steps are vital as I work towards enhancing the robustness and accuracy of the pipeline, ensuring that it can effectively handle the intricacies of processing Hindi Wikipedia content.