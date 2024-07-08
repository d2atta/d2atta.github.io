---
author: Debarghya Datta
pubDatetime: 2024-06-02T05:00:00Z
title: "[GSoC] Week-1 DBpedia Extraction Framework"
featured: false
draft: false
tags:
  - gsoc
description: "Work done in the first week of GSoC coding period."
---

This is the first week(27-31st May) of the coding period of GSoC where the main aim was to understand the current DBpedia Extraction Framework.

## Table of contents

## DBpedia Extraction Framework (DIEF)

The DBpedia Extraction Framework (DIEF) is a critical component of the DBpedia
project. It is responsible for extracting structured information from Wikipedia
and transforming it into a form that can be utilized by various applications.
This framework leverages a collection of extractors, each designed to handle
specific types of data such as infoboxes, tables, and links.

This week, my primary focus was to delve into the architecture and workflow of
DIEF. I explored the codebase to understand how different modules interact, the
configuration of extractors, and the data transformation pipeline. My mentor
provided valuable insights into the intricacies of the framework, helping me
get up to speed with the project's technical requirements.

## Greek DBpedia Chapter

The Greek DBpedia Chapter[^f3] is an extension of the DBpedia project focused on
extracting and structuring data specific to Greek Wikipedia. This chapter aims
to create a comprehensive and semantically enriched knowledge graph in Greek,
such that people can navigate it in their own mother tongue.

During this week, I examined the existing data models and extraction techniques
used for the Greek DBpedia Chapter. This involved studying the specialized
extractors and the ontology designed to represent Greek ontology mappings
accurately. Understanding this chapter's unique requirements has provided me
with a clearer picture of the challenges and objectives of my GSoC project.

## Learnings from the Paper

To further my understanding, I read the paper describing "The New DBpedia Release Cycle"[^f1] related to the
DBpedia project and its release process using Databus[^f2]. These papers provided an
in-depth analysis of the evolution of the DBpedia Extraction Framework,
highlighting its strengths and areas for improvement.

In summary, the first week of my GSoC journey has been a deep dive into the
DBpedia Extraction Framework and the Greek DBpedia Chapter. Armed with the
knowledge gained from the codebase, discussions with my mentor, and academic
literature, I am well-prepared to start working on the specific tasks and goals
set for the coming weeks. Stay tuned for more updates on my progress and
experiences!

[^f1]: https://svn.aksw.org/papers/2020/semantics_marvin/public.pdf
[^f2]: https://databus.dbpedia.org/
[^f3]: https://www.sciencedirect.com/science/article/abs/pii/S1570826812000030
