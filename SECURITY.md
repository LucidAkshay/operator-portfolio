# Threat Model and Security Policy

## Overview
The Operator Portfolio is a static frontend with a single serverless proxy endpoint for AI completions. The primary security objective is protecting the backend API keys from client exposure and preventing prompt injection abuse.

## Fenced AI Boundaries
The AI proxy includes strict server side guardrails. It is programmed to aggressively reject general knowledge questions, code execution requests, and any topic unrelated to the professional background of the portfolio owner. This prevents API credit draining from malicious actors.

## Out of Scope
* Rate limiting is handled natively by the deployment platform (Vercel edge network).
* Volumetric DDoS attacks are out of scope for this repository.

## Reporting a Vulnerability
Do not open public issues for zero day vulnerabilities or exposed secrets. 
If you discover a security flaw, specifically regarding the exposure of the `AI_API_KEY` or a severe prompt injection bypass, email `akshay@lucidakshay.dev` immediately. You will receive an acknowledgment within 24 hours.