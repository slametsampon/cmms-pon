---
title: Equipment Configuration
date: '2023-04-04'
tags: ['CMMS', 'scope', 'features', 'equipment']
draft: false
summary: Equipment setup and configuration
---

# Plant Equipment Module `MPE`

Module `MPE` is part of CMMS system. This module handle equipment setup and configuration included :

- Equipment Registration
- TBM template registration
- TBM Planning
- Calculation of `MTBF, MTBR, FMCA`
- Recording of activities (Historical Card).
- Update the spare part list for each equipment, location and stock.
- Trace equipment user spare part
- Perform spare part planning for S/D activities, annual budget based on equipment priority level.

Equipment registration is limited to general specifications, to add a list of spare parts, the TBM schedule is done at MPE.

Update spare parts list is the addition, reduction of the list of spare parts on the equipment including the amount.

Tracing the equipment used for spare parts installed, so that it is easy to carry out stock planning, especially for determining the minimum/maximum.

`PPdM` : Preventive Predictive Maintenance including calibration.
`MTBF` : Mean Time Between Failures
`MTBR` : Mean Time Between Repairs.
`FMCA` : Failure Mode and Critical Analysis

`PPdM Template` is a PPdM pre-configuration based on equipment name (motor, pump, DCS, PLC, compressor etc.) which lists the related work on that equipment.

## Requirement

- MPE is one of the modules that supports the CMMS program
- MPE has several menus in GUI (Graphical User Interface) format so that users can choose the desired activity/transaction.
- The menu (in the form of a menu bar or tool bar) can be selected via the keyboard in the form of a short cut or via the mouse.
- Users can register equipment (registration) based on the details of the name of the tool in question.
- Equipment can be classified (sorted) based on the name of the tool (motor, compressor, pump, control valve, block valve etc.), as well as grouped based on the operating unit (Reformer, CO2 Removal, Reactor, PSA etc.) where the equipment is installed.
- Each tool name has a spare part template-tree (hierarchy), where the template is registered by the user.
- Users can see detailed specifications of the desired equipment.
- You can add a list of the spare parts used to the equipment, the number as well as the list of spare parts can be updated if there are changes.
- The list of spare parts refers to the on-hand list currently in the excel file.
- Users can trace spare parts based on the list of user equipment and the operating unit where the spare parts are used.
- Each equipment can have a priority level based on its importance in supporting factory operations, issues related to safety and the environment.
- Users can find out MTBF, MTBR or the number of hours of equipment operation.
- Users can enter FMCA ratings (Failure Mode and Critical Analysis) which are useful for PPdM planning.
- The equipment also has a list of PPdM (Preventive and Predictive Maintenance) activities, along with the schedule and implementation.
- Equipment also has a list of vendors supplying both tools and spare parts used.
- All data is stored in a database so that it can be used for MPE operations.
- Users can view the history of the equipment as long as it is installed at the factory.
- Users can see a list of daily activities (daily activities) based on the PPdM and MMS schedules.

## `Equipment Class Relationship Diagram`

![Equipment Class Diagram][wo]

[wo]: /static/images/classDiagram/EqpDiagram.jpg
