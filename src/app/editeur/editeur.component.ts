import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit {
  myContent = '';
  constructor(private editorService: EditorService) { }

  ngOnInit(): void {
    this.getContent();
  }

  private async getContent() {

    this.myContent = await
  
      this.editorService.getContent();
  
  }

  saveContent(content: string) {

    this.editorService.setContent(content);
  
  }
  
  

}
