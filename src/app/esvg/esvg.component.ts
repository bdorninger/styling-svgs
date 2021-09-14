import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'esvg',
  templateUrl: './esvg.component.html',
  styleUrls: ['./esvg.component.css']
})
export class ESVGComponent implements OnInit {
  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit() {}

  svgContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`<svg>
    <circle id='mycircle'
      style="stroke:#3983ac"      
      id="circle1"
      cx="50"
      cy="50"
      r="50"      
    />
  </svg>`);
  }
// stroke-width="5"
  elems(): string {
    return `<p>foo</p>`
  }
}
