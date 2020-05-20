---
title: Creating An Interface to Manage Surveys
type: design
layout: project
date: 2016-03-01
---

The Kiip team needed a better way to handle surveys, so I helped launch a dashboard tool to manage them.

---
## Outline

- What: Looking to better understand mobile users' behavior. MVP version used hard coded surveys, with marketing handling the survey content and an engineering implementing and manually pulling data. How could we scale this feature?
- So What: Being able to roll out at scale would enable Kiip run various surveys to gain mobile user behavioral insights at scale so that Kiip could help partners spend their marketing dollars more efficiently
- Then What: figured out constraints based on our database setup and project scope. based on the existing user-facing survey, ensured the internal tool enabled all the necessary functionality, and had space to add additional question/survey types for future iterations.

Team:
- Me, design
- Product manager
- Marketing insights manager (user, stakeholder)
- Front end and back end engineers

## Consumer-facing survey UI

The Kiip team uses the survey management tool to create, run and organize surveys on the Kiip network, collecting over 17 million non-incentivized responses in its first year. The resulting data provides key audience insights to guide the business as well as a valuable data revenue stream.

## The Context and Problem
Like other companies, the nature of Kiip’s business involves collecting data. Aside from collecting performance data, the company also runs surveys to actively gain user insights. The interesting thing is that in early trials, Kiip’s surveys have a remarkably high response rate, so the team wanted to increase the survey run rate.

At this point there was no interface for survey management; each survey was manually implemented and managed by an engineer. Obviously, there needed to be a better way to manage the many surveys.

## The Goal
The end goal was to have a tool accessible via Kiip’s admin dashboard that a team member could use to create and run surveys and manage existing surveys, effectively removing the engineering work from this step. If this was successful, we expected to increase the survey run rate and the number of responses collected.

My role was to collaborate on information architecture, develop the user flow, and visualize the management tool interface.

## Constraints
In defining requirements and scope, we wanted to reach the main objectives while being able to ship something fairly quickly. Since the value of the survey data lies in the insights gleaned, it was important to control how survey question and answer data was input. We also contained the tool to just its core functionality by limiting editing capabilities and advanced features.

Visually, the tool was part of a larger dashboard, so I respected existing UI components and tried to maintain visual continuity.

## Research and Questions
Being that this was an internal tool, I could assume a certain level of knowledge about dashboard functionality, and it was easy to speak to my users and test the design throughout the process.

Through team discussions, we explored questions including but not limited to:
- What information do you need to create a survey? What metadata do you need to be able to meaningfully parse the data collected?
- Do surveys automatically start and end? What determines the survey flight?
- How do we prevent duplicate questions with slightly different wording?
- What if someone wants to run the same question in a different survey? How do they duplicate it?
- Can you make any changes once the survey starts?

## Exploring Solutions
Early one-page ideas

At first, I explored user flows that could be contained on one page because I wanted the tool to feel simple and transparent. However, in walking through the user flow with the product manager and marketing insights manager, we quickly realized it needed to be structured into two parts, which I think provides more clarity to the user and better aligns with our goal to control data input.

The two parts allowed the user to:

# View and manage existing surveys
![Survey management screen](/assets/img/kiip-survey-manage.png)
I visualized this as an overview page with an accordion of all the surveys. There was a lot of data that needed to be organized on this screen so the user could see the most important information right away.

# Create new surveys
![New survey screen](/assets/img/kiip-survey-create.png)
To address the concern with data entry and organization, we broke down the survey creation into 3 sections:
- A create new survey form
- A question database that tracked question and answer option sets
- A create new question form
The 3 parts of the survey creation form

## Looking Back and Forward
Looking back, I can think of at least two possible improvements for next iterations. More editing functionality is needed, and the survey flight trigger could be reviewed: we used start and end dates, which make sense for seasonal surveys, but some surveys might require a minimum number of responses.

Looking forward, adding more customization and data manipulation features would make the survey tool more robust and useful. Just to name one example, the overview page would benefit from more sort and filter options. How many surveys are about the holidays? About shopping? About sports? There are tags on every survey could be better utilized.

**Overall, product collected 20 million non-incentivized responses in its first year. It's been featured in [*eMarketer*](https://www.emarketer.com/Article/Where-Will-Mobile-Users-Shopping-this-Holiday/1014485), [*Bustle*](https://www.bustle.com/p/how-you-should-spend-your-tax-refund-according-to-experts-50931), and *TechCrunch*.**