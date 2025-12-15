import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication} from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})

export class TripCard implements OnInit {
  @Input('trip') trip: any;
  @Output() delete = new EventEmitter<Trip>();

  constructor(private router: Router, private authentication: Authentication) {}

  ngOnInit(): void {

  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip): void {
    if (!confirm(`Are you sure you want to delete trip ${trip.code}?`)) {
      return;
    }

    this.delete.emit(this.trip);
  }

  public isLoggedIn() {
    return this.authentication.isLoggedIn();
  }

}
