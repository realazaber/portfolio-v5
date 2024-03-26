import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: [],
})
export class TimelineComponent implements OnInit {
  // Get gray and fill-in line
  @ViewChild('bgLine') bgLine: HTMLElement | null = null;
  @ViewChild('fillInLine') fillInLine: HTMLElement | null = null;
  ngOnInit(): void {
    // Check if elements are in view port.
    // if yes
    // make the bottom of the fill-in line be
    // - not higher than top of the line
    // - not lower than bottom of gray line
    // - match center of view port.
    // if not do nothing
  }
}
