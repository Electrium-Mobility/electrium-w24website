---
title: F25 Skateboard
---

![Skateboard Picture 1](img/F25%20Skateboard%20Images/Picture1.jpg)
![Skateboard Picture 2](img/F25%20Skateboard%20Images/Picture2.jpg)



## Members
| **Term:** | Fall 2025 |
|----------- | ----------| 
|**Project Lead:** | Leopoldo Mendoza |
|**Mechanical Team:** | Zahran Mohammad, Christopher Wong, Divit Gawri, Nina Matthew, Evana Trinh, Junaid Haque, Ali Asif, Abdullah Atif |
| **Electrical Team:** | Mike Yao, Arnav Shah, Catherine Huang, Haris Niaz, BingBing Zheng, Kashan Khan, Dhyey Patel, Leopoldo Mendoza |
| **Firmware Team:** | Ethan Sun, Dhyey Patel, Kashan Khan, Minh Nguyen, Daniel Zheng, Leopoldo Mendoza |

## Description
We built an electric skateboard with the battery pack, longboard deck, and electronics enclosure assembled in-house! On top of the core project, we designed its own power distribution, telemetry, and lighting systems. Throughout the term, our team members developed experience across the board by applying key technical skills from CAD in SolidWorks, across schematic capture & PCB layout in KiCad, to embedded C code on ESP32 & AVR.

## Features

![Skateboard Picture 3](img/F25%20Skateboard%20Images/Picture3.png)
![Skateboard Picture 4](img/F25%20Skateboard%20Images/Picture4.jpg)
![Skateboard Picture 5](img/F25%20Skateboard%20Images/Picture5.jpg)


### Longboard Deck
9-layer maple veneer set vacuum pressed with a foam mold. Skateboard deck and mold modelled in SolidWorks prior to fabrication.
![Skateboard Picture 6](img/F25%20Skateboard%20Images/Picture6.png)
![Skateboard Picture 7](img/F25%20Skateboard%20Images/Picture7.jpg)
![Skateboard Picture 8](img/F25%20Skateboard%20Images/Picture8.jpg)

 

### Electronics Enclosure
3D printed after optimizing SolidWorks model to pass height & weight clearances while housing all electronics, including the battery pack, VESC, power distribution, telemetry, and wiring harness.


### Battery Pack
12S2P with nominal specs of 43.2 V, 5600 mAh, 242 Wh. Equipped with a BMS to safely power all other electronics.



### Power Distribution
2-stage power delivery using buck converters with a robust input protection circuit. Safely steps down the battery pack voltage from 43.2 V to 12 V to 3.3 V, feeding the head & tail lights and lighting control & telemetry MCUs, respectively. PCB designed in KiCad.

### Telemetry
ESP32 displays key vehicle metrics in real-time to both an on-board OLED display and a phone through BLE. Communicates with VESC & BMS through UART. PCB designed in KiCad.

### Lighting
Vehicle-grade head & tail lights controlled by an ATMega328P programmed in bare-metal C. Each unit features multiple distinct lighting modes, including a mode for accelerometer-guided brake lights.