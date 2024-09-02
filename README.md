# Randevu Planlayıcı

incelemek için: https://main--erdisalgin-appointment-app.netlify.app/

Bu proje, Angular ile geliştirilmiş bir randevu planlama uygulamasıdır. Uygulama, kullanıcıların randevu oluşturmasına, görüntülemesine ve silmesine olanak tanır. Randevular, tarayıcı oturumları arasında kalıcılık sağlamak için `localStorage` kullanılarak saklanır.

## Özellikler

- **Randevu Oluşturma:** Başlık ve tarih ile yeni bir randevu ekleyin.
- **Randevuları Görüntüleme:** Tüm planlanmış randevuları liste formatında görüntüleyin.
- **Randevu Silme:** Listeden bir randevuyu silin.
- **Veri Kalıcılığı:** Randevular `localStorage`'a kaydedilir, bu sayede sayfa yenilendikten sonra bile randevular erişilebilir durumda olur.

## Başlarken

### Gereksinimler

Bilgisayarınızda aşağıdaki programların yüklü olduğundan emin olun:

- [Node.js](https://nodejs.org/) (v14.x veya üstü)
- [Angular CLI](https://angular.io/cli) (v12.x veya üstü)

### Kurulum

1. **Depoyu klonlayın:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/appointment-scheduler.git
    cd appointment-scheduler
    ```

2. **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    ```

3. **Uygulamayı çalıştırın:**

    ```bash
    ng serve
    ```

4. **Uygulamayı tarayıcınızda açın:**

   `http://localhost:4200/` adresine giderek uygulamayı görüntüleyin.

## Kullanım

### Randevu Ekleme

1. Randevu için sağlanan giriş alanına bir açıklama girin.
2. Randevu için bir tarih seçin.
3. "Ekle" butonuna tıklayarak randevuyu kaydedin.

### Randevuları Görüntüleme

- Kaydedilen tüm randevular liste formatında görüntülenir.
- Tarih `dd.MM.yyyy` formatında gösterilir.

### Randevu Silme

- Bir randevuyu listeden silmek için "Sil" butonuna tıklayın.

## Kod Yapısı

### Bileşenler

- **AppointmentListComponent:** Randevuların oluşturulması, görüntülenmesi ve silinmesinden sorumlu bileşen.

### Modeller

- **Appointment:** Randevu nesnesinin yapısını temsil eden TypeScript arayüzü.

```typescript
export interface Appointment {
  id: number;
  title: string;
  date: Date;
}
-------------------------------------------------------------------------------------------------------
# Appointment Scheduler

to preview: https://main--erdisalgin-appointment-app.netlify.app/

This project is an appointment scheduling application built with Angular. The application allows users to create, view, and delete appointments. Appointments are stored locally using `localStorage`, ensuring persistence across browser sessions.

## Features

- **Create Appointments:** Add a new appointment with a title and date.
- **View Appointments:** Display a list of all scheduled appointments.
- **Delete Appointments:** Remove an appointment from the list.
- **Data Persistence:** Appointments are saved to `localStorage`, ensuring that they are available even after refreshing the page.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Angular CLI](https://angular.io/cli) (v12.x or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/appointment-scheduler.git
    cd appointment-scheduler
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    ng serve
    ```

4. **Open the application in your browser:**

    Navigate to `http://localhost:4200/` to view the application.

## Usage

### Adding an Appointment

1. Enter a description for the appointment in the provided input field.
2. Select the date for the appointment.
3. Click the "Add" button to save the appointment.

### Viewing Appointments

- All saved appointments are displayed in a list format.
- The date is formatted in `dd.MM.yyyy` format.

### Deleting an Appointment

- Click the "Delete" button next to an appointment to remove it from the list.

## Code Overview

### Components

- **AppointmentListComponent:** Handles the creation, display, and deletion of appointments.

### Models

- **Appointment:** A TypeScript interface representing the structure of an appointment object.

```typescript
export interface Appointment {
  id: number;
  title: string;
  date: Date;
}


# AppointmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
