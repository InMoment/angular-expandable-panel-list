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
import { ExpandablePanelContentComponent } from './expandable-panel-content.component';

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
    @Input() mobile: boolean;

    @Output() status = new EventEmitter();

    @ContentChildren(ExpandablePanelTitleComponent) _title: QueryList<ExpandablePanelTitleComponent>;
    @ContentChildren(ExpandablePanelContentComponent) _content: QueryList<ExpandablePanelContentComponent>;

    public closing = false;
    public styleHeight: string;
    public styleTop: string;

    private state: string;
    private myElement: ElementRef;
    private top: string;
    private height: string;
    private totalHeight: number;
    private maxHeight: number;

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
        this.mobile = true;
        // Use setTimeout to avoid the ExpressionChangedAfterItHasBeenCheckedError
        setTimeout(() => {
            this.top = this.myElement.nativeElement.offsetTop + 'px';
            this.height = this.myElement.nativeElement.querySelector('expandable-panel-title').clientHeight;
            this.totalHeight = this.myElement.nativeElement.parentNode.clientHeight;
            this.maxHeight = window.innerHeight - this.myElement.nativeElement.parentNode.offsetTop - 16;
            if(this.totalHeight > this.maxHeight)
                this.totalHeight = this.maxHeight;
            this.styleHeight = this.height + 'px';
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
            this.styleHeight = this.myElement.nativeElement.clientHeight + 'px';
            setTimeout(() => this.styleHeight = this.height + 'px',0);
            //this.styleHeight = this.height + 'px';
            this.closing = true;
            setTimeout(()=>this.setState(false),400);
        } else {
            if(this.mobile) {
                this.styleTop = '0px';
                this.styleHeight = this.totalHeight + 'px';
            } else {
                this.styleHeight = this.getContentHeight() + this.height + 35 + 'px';
                setTimeout(()=>{
                    this.styleHeight = 'auto';
                },400);
            }
            this.setState(!this.open);
        }   
    }

    getContentHeight() {
        let height = 0;
        this._content.forEach(content => {
            height += content.height;
        });
        return height;
    }

}