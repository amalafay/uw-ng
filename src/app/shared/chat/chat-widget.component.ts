import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from './chat.service';

@Component({
  standalone: true,
  selector: 'app-chat-widget',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss']
})
export class ChatWidgetComponent {
  open = false;
  input = '';
  history: ChatMessage[] = [
    { role: 'assistant', text: 'Hola 👋 Soy tu asistente. ¿En qué puedo ayudarte hoy?', ts: Date.now() }
  ];
  sending = false;

  constructor(private chat: ChatService) {}

  toggle() { this.open = !this.open; }

  send() {
    const text = this.input.trim();
    if (!text || this.sending) return;
    this.history.push({ role: 'user', text, ts: Date.now() });
    this.input = '';
    this.sending = true;
    this.chat.sendMessage(this.history, text).subscribe({
      next: msg => this.history.push(msg),
      complete: () => this.sending = false,
      error: () => this.sending = false
    });
  }
}
