import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wizzard',
  template: `
    <nz-steps [nzCurrent]="current">
      <nz-step nzTitle="Personal Info"></nz-step>
      <nz-step nzTitle="Aditional Info"></nz-step>
      <nz-step nzTitle="Done"></nz-step>
    </nz-steps>

    <div class="steps-content" *ngIf="current === 0">
    <form nz-form>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="userName">Username</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input nz-input id="userName" />
        </nz-form-control>
      </nz-form-item>
      </form>
    </div>
    <div class="steps-content" *ngIf="current === 1">
    <form nz-form>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="address">Address</nz-form-label>
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <input nz-input id="address" />
        </nz-form-control>
      </nz-form-item>
      </form>
    </div>
    <div class="steps-content" *ngIf="current === 2">{{ index }}</div>
    <div class="steps-action">
      <button nz-button nzType="default" (click)="pre()" *ngIf="current > 0">
        <span>Previous</span>
      </button>
      <button nz-button nzType="default" (click)="next()" *ngIf="current < 2">
        <span>Next</span>
      </button>
      <button nz-button nzType="primary" (click)="done()" *ngIf="current === 2">
        <span>Done</span>
      </button>
    </div>
  `,
  styles: [
    `
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `
  ]
})
export class WizzardComponent implements OnInit {

  
  current = 0;
  content = `<div>labas</div>`;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
       /* do something */
        
        break;
      }
      case 1: {
          /* do something */
        break;
      }
      case 2: {
        this.index = 'Congratulations, registration is complete!';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  constructor() {}
  ngOnInit() {
   
}
}
