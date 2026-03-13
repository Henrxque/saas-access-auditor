# SaaS Access Auditor

**A Lumenstack product**  
**Find wasted SaaS spend, risky access, and messy account hygiene before they become expensive.**

SaaS Access Auditor is a CSV-first micro-SaaS built by **Lumenstack** to help companies uncover hidden waste in software licenses, identify risky access, and clean up account chaos across their SaaS stack.

Instead of starting with heavy integrations, complex setup, and enterprise friction, the MVP starts simple:

Upload your exports.  
Match users by email.  
Run the audit.  
See where money is leaking and where access became a risk.

---

## About Lumenstack

**Lumenstack** builds lightweight SaaS tools focused on operational clarity, access visibility, and smarter decision-making across modern software stacks.

SaaS Access Auditor is the first product in that vision.

---

## The problem

Most small and mid-sized companies live with the same silent SaaS problems:

- paying for licenses nobody really uses
- ex-employees still keeping access
- too many admin roles spread across tools
- duplicate or abandoned accounts
- no clear view of what is waste vs what is risk
- no fast way to turn raw exports into cleanup actions

This hurts:

- margin
- security
- governance
- offboarding quality
- operational clarity

---

## What SaaS Access Auditor does

SaaS Access Auditor turns simple CSV/XLSX exports into a clear audit of:

- **waste**
- **risk**
- **hygiene**

The MVP helps teams answer questions like:

- Which paid accounts look unused?
- Which former employees still have active access?
- Which users may be over-licensed?
- Where are admin privileges too broad?
- Which accounts look abandoned, duplicated, or inconsistent?
- How much money could be saved monthly?

---

## Core MVP flow

The MVP is intentionally simple and fast.

### 1. Create an audit
Start a new audit inside the app.

### 2. Upload up to 3 files
You can upload:

- **directory export**  
  user/account source such as Google Workspace, Microsoft 365, Slack, etc.

- **licenses export**  
  license assignment and cost source

- **HR export**  
  active/inactive employee source

### 3. Map columns
Map required fields like email, account status, employment status, license name, and cost.

### 4. Run the audit
The system processes the files, matches records by email, and applies deterministic rules.

### 5. Review results
Get a results dashboard with the most important findings first.

---

## Main outputs

The product is built to surface practical, decision-ready outputs.

### Scores and metrics
- **Waste Score**
- **Access Risk Score**
- **Potential Monthly Savings**
- **Critical Issues Found**

### Prioritized issues
Issues are grouped into:

- **Waste**
- **Risk**
- **Hygiene**

Each issue can include:
- severity
- affected user/account
- explanation
- suggested action
- savings estimate when applicable

---

## Example findings

### Waste
- paid license with no recent usage
- expensive plan assigned to the wrong user
- duplicate license/account pattern
- inactive or abandoned paid account

### Risk
- former employee still active
- user with elevated admin privilege
- orphaned account with no clear owner
- inconsistent account status across sources

### Hygiene
- missing important fields
- conflicting records between files
- messy identity data that blocks clean governance

---

## Why this product exists

A lot of SaaS governance tools start too heavy.

They assume:
- mature IT ops
- full integrations
- long setup
- enterprise budget
- patience for complex rollout

This product goes in the opposite direction.

**SaaS Access Auditor, by Lumenstack, starts lightweight and useful.**

No heavy enterprise motion.  
No dependency on OAuth at day one.  
No complicated onboarding.

Just upload the files most companies already have and get clarity fast.

---

## MVP scope

### Included in MVP
- manual upload of CSV/XLSX files
- support for up to 3 source files
- email-based identity matching
- rules engine for waste / risk / hygiene
- dashboard with key scores and findings
- prioritized issue list
- CSV export of results

### Out of scope for MVP
- native integrations
- OAuth connectors
- automatic sync
- advanced billing
- generative AI features
- enterprise workflows
- complex RBAC / multi-org administration

---

## Who this is for

SaaS Access Auditor is designed first for:

- small and mid-sized companies
- ops teams
- IT/generalist admins
- founders who want visibility into SaaS waste
- teams cleaning up access after growth
- companies without a mature IAM or SaaS management stack

---

## Product principles

This MVP follows a few simple principles:

- **fast to understand**
- **fast to upload**
- **fast to get value**
- **clear findings over fancy complexity**
- **practical actions over noisy dashboards**

---

## Tech stack

Current planned stack:

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Prisma**
- **Zod**
- **Neon**
- **Cloudflare R2**
- **Resend**
- **Vercel**
- **Clerk or Supabase Auth**
- **PapaParse / csv-parse**
- **SheetJS**

---

## Current status

This repository contains the MVP foundation for **SaaS Access Auditor**, a product by **Lumenstack**.

The roadmap is organized in sprints, starting with:

- Sprint 0 → product definition, flow, wireframes, rules, base structure
- Sprint 1 → auth, audits, uploads, storage, base UX
- Next sprints → parsing, mapping, rules execution, scoring, results dashboard

---

## Vision

The long-term vision of **Lumenstack** is to build lightweight SaaS intelligence tools that help companies gain visibility and control without enterprise-level complexity.

SaaS Access Auditor is the first step in that direction.

Start simple.  
Find the leaks.  
Reduce the waste.  
Lower the risk.  
Clean the mess.

---

## Positioning

**Lumenstack**  
*Lightweight SaaS visibility tools for modern teams.*

**SaaS Access Auditor**  
*The hidden waste and access risk detector inside your SaaS stack.*

---

## Development note

This product is being built MVP-first.

That means:
- speed over perfection
- usefulness over bloat
- clarity over feature overload

The goal is to get to a functional version quickly, validate real demand, and expand from there.

---

## Future evolution

Possible future directions after MVP:

- Google Workspace connector
- Microsoft 365 connector
- Slack connector
- automated recurring audits
- owner-based remediation workflows
- historical tracking
- benchmark insights
- access review workflow
- savings tracking over time

---

## Summary

**SaaS Access Auditor**, built by **Lumenstack**, helps companies answer a simple but expensive question:

**Where are we wasting money, keeping risky access, and losing control of our SaaS accounts?**

With just a few exports, the product turns messy operational data into prioritized findings and action-ready visibility.
