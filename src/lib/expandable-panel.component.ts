import { Component, Input, Output, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'expandable-panel',
    template: `
    <div class="expandable-panel" [class.open]="open" [style.top]="styleTop" [style.height]="styleHeight">
        <div class="title ripple" (click)="toggle()">{{ title }}</div>
        <div class="content">
            <ng-content></ng-content>
        </div>
    </div>
    `,
    animations: [
        trigger('panelState',[
            state('closed',style({
                'top':'*'
            })),
            state('opened',style({
                'top':'0px'
            })),
            transition('opened <=> closed', animate('500ms ease'))
        ])
    ]
})
export class ExpandablePanelComponent {

    @Input() title: string;

    @Input() open: boolean;

    @Output() status = new EventEmitter();

    private state: string;

    private myElement: ElementRef;
    private top: string;
    private height: string;
    private styleHeight: string;
    private styleTop: string;
    private totalHeight: string;

    constructor(myElement : ElementRef, private sanitizer: DomSanitizer) {
        this.myElement = myElement;
    }

    setState(open: boolean) {
        this.open = open;
        if(this.open) {
            this.state = 'opened';
        } else {
            this.state = 'closed';
        }
        this.status.emit(this.open);
    }

    ngAfterViewInit(){        
        this.top = this.myElement.nativeElement.offsetTop + 'px';
        this.height = this.myElement.nativeElement.innerHeight + 'px';
        this.totalHeight = this.myElement.nativeElement.parentNode.innerHeight + 'px';
        this.styleHeight = this.height;
        this.styleTop = this.top;
        this.setState(this.open);
    }

    toggle() {
        if(this.open) {
            this.styleTop = this.top;
            this.styleHeight = this.height;
            setTimeout(()=>this.setState(false),500);
        } else {
            this.styleTop = '0';
            this.styleHeight = this.totalHeight;
            this.setState(!this.open);
        }
        
    }

}