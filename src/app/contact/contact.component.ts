import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  messageSent = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  /**
   * Sends the email by collecting the form data and sending it to the server.
   */
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableInputFields(nameField, emailField, messageField, sendButton);
    let formData = new FormData();
    this.appendFormData(formData, nameField, emailField, messageField);
    try {
      await this.sendToServer(formData);
      this.handleSuccess();
    } catch (error) {
      this.handleError();
    }
    this.enableInputFields(nameField, emailField, messageField, sendButton);
    this.resetInputFields(nameField, emailField, messageField);
  }


  /**
  * Handles the success scenario after sending the email.
  */
  handleSuccess() {
    this.messageSent = true;
    this.errorMessage = null; // Clear any previous error messages.
    this.successMessage = 'Message sent successfully!';
    this.clearMessagesAfterDelay(3000);
  }


  /**
  * Handles the error scenario while sending the email.
  */
  handleError() {
    console.error('Failed to send email');
    this.errorMessage = 'Failed to send the contact form. Please try again later.';
    this.successMessage = null; // Clear any previous success messages.
    this.clearMessagesAfterDelay(3000);
  }


  /**
   * Clears the messages (successMessage and errorMessage) after a specified delay.
   * @param delay The delay in milliseconds before clearing the messages.
   */
  clearMessagesAfterDelay(delay: number) {
    setTimeout(() => {
      this.messageSent = false;
      this.errorMessage = null;
      this.successMessage = null;
    }, delay);
  }


  /**
   * Disables input fields.
   * @param nameField
   * @param emailField
   * @param messageField
   * @param sendButton
   */
  disableInputFields(nameField: any, emailField: any, messageField: any, sendButton: any){
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  /**
   * Appends the field values to the given FormData object.
   * @param formData
   * @param nameField
   * @param emailField
   * @param messageField
   */
  appendFormData(formData: any, nameField: any, emailField: any, messageField: any) {
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
  }


  /**
   * Sends message to server.
   * @param formData
   */
  async sendToServer(formData: any){
    await fetch('https://patrick-kieber.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: formData
    });
    this.messageSent = true;
  }


  /**
  * Enables input fields.
  * @param nameField
  * @param emailField
  * @param messageField
  * @param sendButton
  */
  enableInputFields(nameField: any, emailField: any, messageField: any, sendButton: any){
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


  /**
   * Resets all input fields.
   * @param nameField
   * @param emailField
   * @param messageField
   */
  resetInputFields(nameField: any, emailField: any, messageField: any){
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }
}
