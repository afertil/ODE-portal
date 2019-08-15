import { Injectable } from "@angular/core";

import { MatSnackBar } from "@angular/material";

export enum LOGGER_LEVEL {
  INFO,
  WARNING,
  SUCCESS,
  ERROR,
  IMPORTANT
}

@Injectable()
export class LoggerService {
  constructor(private snackBar: MatSnackBar) {}

  info(message: string) {
    this.snackBar.open(message, "Information", {
      duration: 2000
    });
  }

  warning(message: string) {
    this.snackBar.open(message, "Warning", {
      duration: 2000
    });
  }

  success(message: string) {
    this.snackBar.open(message, "Success", {
      duration: 2000
    });
  }

  error(message: string) {
    this.snackBar.open(message, "Error", {
      duration: 2000
    });
  }

  important(message) {
    this.snackBar.open(message, "Important", {
      duration: 2000
    });
  }
}
