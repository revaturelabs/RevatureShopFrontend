import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {



  baseServerURL: string = "http://localhost:9001/inventoryms/";
  currentImageUploadedNAME : string = '';

  imageUploadFinished : boolean = false;
  imageFormatError : boolean = false;
  imageUploadMessage : string = "";

  imagePreviewURL: any;

  xVisible : boolean = false;

  @Input() imageUploadProgress = "";


  @Output() fileSelectedEvent = new EventEmitter<File>();



  constructor(private http: HttpClient) {


   }

  ngOnInit(): void {

  }



uploadFile(data: FormData): Observable<boolean> {

  var httpHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  var httpOptionsJSON = { headers: httpHeadersJSON, withCredentials: true };

  var aRequest = this.http.put<boolean>(this.baseServerURL + "/api/inventory/stockitem/update/addimage",
                                                  data, httpOptionsJSON);

  return aRequest;
}


processFile(imageInput: any) {
  const file: File = imageInput.files[0];

  if (file) {
    console.log("file.name = "+file.name+".  file.type = "+file.type);
  }
  if (!file) {
    this.currentImageUploadedNAME = "";
  }

  if (file && (file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg")) {
    console.log("Valid image");
    /*   VALID IMAGE   */
    this.currentImageUploadedNAME = file.name;
    this.imageUploadMessage = file.name;
    this.imageFormatError = false;
    this.imageUploadFinished = false;
    this.xVisible = true;

    /* Generate Image preview */
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imagePreviewURL = reader.result;
    }


    this.fileSelectedEvent.emit(file);

  }
  else if (file && !(file.type == "image/png" || file.type == "image/jpeg" || file.type == "image/jpg")) {

    this.currentImageUploadedNAME = "";
    this.imageUploadMessage = "Please enter a proper image format. (JPG, PNG)";
    this.imageFormatError = true;
    this.imageUploadFinished = false;
    this.xVisible = false;
    this.imagePreviewURL = "";

  }

}


removeImageToBeUploaded() : void {
  this.currentImageUploadedNAME = "";
  this.imageUploadMessage = "";
  this.imageFormatError = false;
  this.imageUploadFinished = false;
  this.xVisible = false;
  this.imagePreviewURL = "";
}

}
