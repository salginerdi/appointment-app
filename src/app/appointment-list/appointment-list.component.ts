import {Component, OnInit} from '@angular/core';
import {Appointment} from "../models/appointment";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date()
  appointments: Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment)
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date()

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }


}
