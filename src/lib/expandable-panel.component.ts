import { Component, Input, Output, ElementRef, OnInit, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ExpandablePanelTitleComponent } from './expandable-panel-title.component';

@Component({
    selector: 'expandable-panel',
    template: `
    <div class="expandable-panel" [class.open]="open" [class.closing]="closing" [style.top]="styleTop" [style.height]="styleHeight">
        <ng-content></ng-content>
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

    @Input() open: boolean;

    @Output() status = new EventEmitter();

    @ContentChildren(ExpandablePanelTitleComponent) _title: QueryList<ExpandablePanelTitleComponent>;

    public closing = false;
    public styleHeight: string;
    public styleTop: string;

    private state: string;
    private myElement: ElementRef;
    private top: string;
    private height: string;
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
        this.closing=false;
        this.status.emit(this.open);
    }

    ngAfterViewInit(){
        // Use setTimeout to avoid the ExpressionChangedAfterItHasBeenCheckedError
        setTimeout(() => {
            this.top = this.myElement.nativeElement.offsetTop + 'px';
            this.height = this.myElement.nativeElement.clientHeight + 'px';
            this.totalHeight = this.myElement.nativeElement.parentNode.clientHeight + 'px';
            this.styleHeight = this.height;
            this.styleTop = this.top;
            this.setState(this.open);
            this._title.forEach((item) => {
                item.clicked.subscribe((clicked: any) => { this.toggle(); });
            });
        });        
    }

    toggle() {
        if(this.open) {
            this.styleTop = this.top;
            this.styleHeight = this.height;
            this.closing = true;
            setTimeout(()=>this.setState(false),400);
        } else {
            this.styleTop = '0';
            this.styleHeight = this.totalHeight;
            this.setState(!this.open);
        }
        
    }

}