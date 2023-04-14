---
title: TBM - Time Base Maintenance
date: '2023-04-04'
tags: ['CMMS', 'scope', 'features', 'activities']
draft: false
summary: TBM - setup, configure, planning for periodically maintenance
---

The `TBM` Module is a module that handles Preventive and Predictive Maintenance including calibration, including the following:

- Initial set-up and configuration
- Scheduling
- Assign daily tasks
- Print calibration results

Initially `TBM` must be run by the user from the CMMS main menu, where previously the user had the right to use this app. Furthermore, the user can see the daily schedule of equipment (equipment, tools, etc.) that are due at that time or that have not been completed in the form of a list in a table on the monitor screen automatically when the user first sees the screen. From the list, you can select a piece of equipment to view details of work, tools, amount of man-power for daily planning purposes. If man-power available, the user can enter Daily Activities to be done on that day. For calibration, besides being able to see the schedule, tools, you can also make and print calibration results. From the results of the `TBM`, if the work cannot be done, the user can enter it in the S/D item list, if the `TBM` requires material while the warehouse is not available, the user can retrieve the complete specifications of the required material from the on-hand database, then put it on the list. Material needs. In order to function properly, `TBM` must perform an initial configuration (Set-up) which consists of:

- Include a list of equipment to be used by `TBM`
- Make a list of work related to the equipment in question according to the name of the equipment.
- Include a list of tools (tools) used
- Provide the number of people and time (Manhour) required
- Determine the `TBM` period in the week and when it starts

Furthermore, the configuration is stored in the database for `TBM` operational needs. In carrying out this configuration, equipment can be seen as a stand-alone tool or can be included in a group (especially for instrumentation, electrical equipment, etc.). If included in a group, the `TBM` schedule follows the group. To facilitate configuration, `TBM` can obtain (read) data from excel files that have been formatted accordingly
