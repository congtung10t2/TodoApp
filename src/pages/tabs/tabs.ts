import { Component } from '@angular/core';

import { CalendarPage } from '../calendar/calendar';
import { ThisWeekPage } from '../this_week/this_week';
import { TodayPage } from '../today/today';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = CalendarPage;
  tab3Root = ThisWeekPage;

  constructor() {

  }
}
