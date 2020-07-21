import {Component, OnChanges, Input, Output,EventEmitter} from '@angular/core'
@Component({
selector:'star-tag',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
   @Input() rating: number ;
   starWidth: number;
   @Output() ratingEvent: EventEmitter<string> =new EventEmitter<string>();
   ngOnChanges(): void{
       this.starWidth=this.rating * 15;
   }
   onClick(): void {
      this.ratingEvent.emit(`${this.rating}`)
   }
}