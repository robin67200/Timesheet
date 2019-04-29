import * as moment from 'moment';
export class Day {
  userId: number;
  projetId: number;
  date: Date;
  timeSpent: number;
}

export class Month {
  label: string;
  ndays: number;
  day: Day[];
  firstDay: number;
  constructor(month: Date, idUser: number, idProjet: number, days: Day[]) {
    this.day = new Array<Day>();
    // récupère le nombre de jours dans le mois
    const date = new Date(month);
    this.ndays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    this.firstDay = date.getDay();
    days.forEach((x) => {
      x.date = new Date(x.date);
    });
    this.createday(date.getMonth(), date.getFullYear(), idUser, idProjet, days);
  }
  createday(month: number, year: number, idUser: number, idProjet: number, days: Day[]) {
    for (let index = 0; index < this.ndays; index++) {
      var day = new Day();
      day.date = new Date(year, month, index + 1);
      var test = moment(day.date);
      var t = test.utcOffset();
      test.add(t, 'm');
      day.date = test.toDate();
      day.userId = idUser;
      day.projetId = idProjet;
      var time = days.find((x) => x.date.getDate() === day.date.getDate() && x.projetId === day.projetId);
      if (time !== undefined) {
        day.timeSpent = time.timeSpent;
      } else {
        day.timeSpent = 0;
      }
      this.day.push(day);
    }
  }
  getday(daysget: Day[]) {
    this.day.forEach((c) => c = daysget.find((x) => x.date.getDate() === c.date.getDate()));
  }
}
