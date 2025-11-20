import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, delay, map } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  ts: number;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  sendMessage(history: ChatMessage[], message: string): Observable<ChatMessage> {
    // Modo MOCK: si no hay endpoint configurado, respondemos localmente
    if (!environment.chatApiUrl) {
      const pitch =
        '¡Gracias por escribir! Soy tu asistente virtual. ¿Te gustaría conocer precios, certificaciones o agendar una demostración?';

      return of<ChatMessage>({
        role: 'assistant',
        text: `${pitch}\n\nTu mensaje fue: "${message}"`,
        ts: Date.now(),
      }).pipe(delay(400));
    }

    // Modo REAL: llama a tu API (Cloud Run / Function / backend propio)
    return this.http.post<{ reply: string }>(environment.chatApiUrl, { history, message }).pipe(
      map(
        (r): ChatMessage => ({
          role: 'assistant',
          text: r.reply,
          ts: Date.now(),
        })
      )
    );
  }
}
