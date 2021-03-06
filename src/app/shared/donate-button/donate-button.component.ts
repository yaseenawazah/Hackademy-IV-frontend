import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-donate-button',
  templateUrl: './donate-button.component.html',
  styleUrls: ['./donate-button.component.scss', './_donate-button.component-theme.scss'],
})

export class DonateButtonComponent implements OnInit {
  @Input() donateOption1;
  @Input() donateOption2;
  @Input() donateOption3;
  @Input() project;
  openSwish = false;
  constructor() {
  }

  toggleAmounts(elm: HTMLElement): void {
    if (elm === undefined) {
      return;
    }

    elm.parentElement.classList.toggle('expanded');
  }

  toggleThings(e) {
    const _target = e.srcElement || e.currentTarget;

    if (_target['localName'] !== 'fab') {
      const donateButton = e.currentTarget.querySelectorAll('.fab-menu.expanded')[0];

      if (donateButton !== undefined) {
        donateButton.classList.remove('expanded');
      }
    }
  }

  ngOnInit() {
    const body = document;

    if (body !== undefined) {
      body.addEventListener('mouseup', this.toggleThings);
    }
  }

  donate(amount: number) {
    if (this.project.raisedFunding + amount < this.project.amountToBeRaised) {
      this.project.raisedFunding +=  amount;
      // the project should be saved here
      this.openSwish=true;
    }
  }
}

