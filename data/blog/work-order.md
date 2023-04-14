---
title: Module Work Order - MWO
date: '2023-04-04'
tags: ['CMMS', 'MWO', 'scope', 'features']
draft: false
summary: Work order algorithm flow
---

## `MWO` is part of `CMMS` system and this module for following task :

- Create/open requests during normal working hour and holidays
- Submit to the next level of approval/examiner according to the approval flow
- Record the history of the journey from manufacture until the job is declared complete
- Provides opportunity to write comments on each level.
- Provides instruction/guidance for executor
- Provides action, labour, materials, tools
- Tracking every work request (Work Order)
- Make a report (daily – monthly) of the activities carried out during the period in question

## Requirements

1. `MWO` is one of the modules that supports the `CMMS` program
2. `MWO` has several menus in GUI (Graphical User Interface) format so that users can choose the desired activity/transaction.
3. Each `user` must log in via the login menu
4. If the `user` has been registered, where will the sgg menu be displayed:

   - List of `WO` in accordance with the status that requires attention
   - Able to do tracing of `WO`

5. All of these activities can be monitored from the internet
6. `Originator` is the `WO` publisher user group
7. `Executor` is a group of executing `WO`
8. `Users` can submit any requests they have to the next level as follows:

   - Perform `WO` approval
   - Approve the completion of `WO`
   - Perform `WO` returns
   - Able to provide notes in the comments column
   - Able to provide `WO` status according to the authority given

9. Every change in `WO` status is recorded in the `WO journal`
10. `Frm – Executor`: Carry out the WO that has been assigned to him and provide reports related to the WO including:

    - Activities undertaken
    - Fill in spare parts, materials and tools used
    - Fill in the number of man-hours (man power & duration)
    - Provide WO status

11. `Spv – Executor`: Carry out activities including:

    - Make `WO` schedules/schedules taking into account the availability of existing resources (MP, Materials, Tools)
    - Make daily activity report
    - Provide `WO` status

12. `Sptd – Executor`: Carry out activities including:

    - Prepare monthly reports including:
    - Number of incoming, finished, pending WO
    - Analyzing WO pending
    - Analyzing repetitive problems
    - Provide WO status

13. `Mgr – Executor` : Makes an executive summary and follows up on pending
    WOs

## `WO Flowchart`

![Flow Chart][def]

[def]: /static/images/WoFlowChart.png

## `WO Class Relationship Diagram`

![WO Class Diagram][wo]

[wo]: /static/images/classDiagram/WoDiagram.jpg
