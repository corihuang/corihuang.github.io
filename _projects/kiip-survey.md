---
title: Creating An Interface to Manage Surveys
type: design
layout: project
date: 2016-03-01
thumbnail: assets/img/kiip-survey.jpg
---

The Kiip team used the survey management tool to create, run, and organize surveys on the Kiip network, collecting over 20 million non-incentivized responses in its first year. The resulting data provides key audience insights to guide the business as well as a valuable data revenue stream.

---

**Team**
- Me, design
- Product manager
- Marketing insights manager (user, stakeholder)
- Front end and back end engineers

Like other companies, Kiip’s business involves collecting data. Aside from collecting performance data, the company also runs surveys to actively gain user insights. The exciting thing is that in early trials, Kiip’s surveys had a remarkably high response rate, so the team wanted to increase the survey run rate.

At this point there was no interface for survey management: each survey was manually implemented and managed by an engineer. Obviously, this was a point of friction, and the team wanted a better way to manage the many surveys. I was tasked with improving this workflow, so I designed the user flow and visualized the interface for a survey management tool in the internal dashboard.

## Goals
The end goal was to have a tool in Kiip’s internal dashboard that enabled a team member to create surveys and manage existing surveys, effectively removing the engineering work from this step. If this was successful, we expected to increase the survey run rate and the number of responses collected.

## Defining the Product
In defining requirements and scope, we wanted to fulfill the main objective while being able to ship a minimum viable product quickly. 

At first, I tried to organize the core functionality into one page for simplicity, but after walking through the user flow with the team, we quickly realized it needed to be structured into two parts in order to provide the core functionality and be able to store data cleanly. After all, being able to analyze the data afterwards was a key benefit for this product.

To constrain the scope, we limited editing capabilities and did not include advanced filtering or viewing capabilities. I also used existing UI components to maintain visual continuity.

## Solution

**View and manage existing surveys**
![Survey management screen](/assets/img/kiip-survey-manage.png)
This was an overview page with an accordion of all the surveys. There was a lot of data that needed to be organized on this screen so the user could see the most important information right away.

The top level showed the survey name, active or inactive status, number of responses, tags, and dates. In the expanded view, the user could see a preview of the survey with questions visible and targeting options, along with the top level info.

**Create new surveys**
![New survey screen](/assets/img/kiip-survey-create.png)
To address the concern with data entry and organization, we broke down the survey creation into 3 steps:
- A create survey form
- A question list tracking question and answer option sets
- A new question form

## Results
**Overall, the product was a success, collecting 20 million non-incentivized responses in its first year and allowing the marketing team to manage all surveys without engineering support. It's been featured in [*eMarketer*](https://www.emarketer.com/Article/Where-Will-Mobile-Users-Shopping-this-Holiday/1014485), [*Bustle*](https://www.bustle.com/p/how-you-should-spend-your-tax-refund-according-to-experts-50931), and *TechCrunch*.**

As far as improvements, there is still a lot of manual work that could be offloaded to the tool. For instance, the survey is activated by setting start and end dates, which make sense for seasonal surveys, but some surveys should be set to collect a minimum number of responses. Ideally, I'd also like to understand how the end user's experience is impact by the surveys to potentially build in notifications or metrics to inform the marketing team's decisions.