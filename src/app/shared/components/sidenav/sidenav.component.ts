import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

// import { Store } from "@store";

@Component({
  selector: 'app-sidenav',
  styleUrls: ['sidenav.component.scss'],
  template: `
    <mat-sidenav-container class="sidenav">
      <mat-sidenav
        opened
        fixedInViewport
        fixedTopGap="64"
        fixedBottomGap="0"
        mode="side"
        class="container"
      >
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="wrapper">
          sidenav
          <router-outlet></router-outlet>
          <!-- <mat-spinner diameter="50"></mat-spinner> -->
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class SidenavComponent implements OnInit {
  @Input()
  applications: Array<String>;

  constructor() // private applicationService: ApplicationService // private store: Store,
  {}

  ngOnInit() {
    // TODO add to subscription to unsubscribe on component destruction
    //   this.roomsService.getRooms().subscribe(rooms => {
    //     const globalRooms = rooms.filter(room => room.is_user === false);
    //     this.store.set("rooms", globalRooms);
    //     this.rooms = this.store.select<Room[]>("rooms");
    //   });
  }
}
