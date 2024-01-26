import { IAxiosError } from "@/base/interfaces/axios-error.interface";
import SweetAlert, { SweetAlertOptions } from "sweetalert2";

class AlertHelper {
  /**
   * * show a alert by type
   *
   * Send alert
   * @param text title
   * @param type type
   * @param body body
   * @param options {SweetAlertOptions}
   */
  show(
    text = "",
    type: "info" | "success" | "error" | "warning" | "question" = "success",
    body = "",
    options: SweetAlertOptions = {}
  ) {
    SweetAlert.fire({
      title: text,
      html: body,
      icon: type,
      showCancelButton: false,
      confirmButtonColor: "#4955a5",
      ...options,
    });
  }

  async showAsync(
    text = "",
    type: "info" | "success" | "error" | "warning" | "question" = "success",
    body = "",
    options: SweetAlertOptions = {}
  ): Promise<{
    isConfirmed: boolean;
    isDenied: boolean;
    isDismissed: boolean;
  }> {
    return SweetAlert.fire({
      title: text,
      html: body,
      icon: type,
      showCancelButton: false,
      confirmButtonColor: "#4955a5",
      ...options,
    });
  }

  showLoading() {
    SweetAlert.fire({
      title: "",
      html: `<div id="loading-alert" class='custom-loader text-center mx-auto'></div>`,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });
  }

  close() {
    SweetAlert.close();
  }

  /**
   * * Show generic error
   */
  showCustomError() {
    this.show(
      "Lo sentimos",
      "error",
      "ha ocurrido un error, intente de nuevo mas tarde"
    );
  }

  showApiError(error: unknown) {
    const axiosError = error as IAxiosError;

    if (axiosError?.response?.status < 500) {
      console.log("err");
      this.show(
        "Error de validación",
        "error",
        axiosError?.response?.data?.message
      );
      return;
    }

    this.show("Lo sentimos, ha ocurrido un error", "error");
  }
}

export default new AlertHelper();
