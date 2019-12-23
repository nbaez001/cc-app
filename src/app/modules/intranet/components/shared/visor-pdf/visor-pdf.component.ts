import { Component, OnInit, Inject } from '@angular/core';
import { DataDialog } from 'src/app/model/data-dialog.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.scss']
})
export class VisorPdfComponent implements OnInit {
  pdfSrc = "";//"https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  // sanitizedUrl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) {
      this.pdfSrc = data.objeto.url;
    // this.sanitizedUrl = sanitizer.bypassSecurityTrustResourceUrl('/assets/files/formato01-fondoEncargo.pdf');
  }

  ngOnInit() {
    // console.log(this.sanitizedUrl);

    // var blob = null;
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", '.');
    // xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    // xhr.onload = () => {
    //   blob = xhr.response;//xhr.response is now a blob object
    //   this.file = new File([blob], 'file.pdf', { type: 'application/pdf', lastModified: Date.now() });
    //   console.log(this.file);
    // }
  }

}
