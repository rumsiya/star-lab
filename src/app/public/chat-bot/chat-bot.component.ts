import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent {
  @ViewChild('chatWindow') chatWindow?: ElementRef<HTMLDivElement>;

  isOpen = false;
  userInput = '';
  messages: ChatMessage[] = [
    { sender: 'bot', text: 'Hello! I can help with login, registration, and account questions.' }
  ];

  constructor(
    private chat : ChatService
  ) { }
  toggleChat(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.scrollToBottom();
    }
  }

  sendMessage(): void {
    const messageText = this.userInput.trim();
    if (!messageText) {
      return;
    }

    this.messages.push({ sender: 'user', text: messageText });
    this.userInput = '';
    this.scrollToBottom();
    this.chat.sendMessage(messageText).subscribe((response: any) => {
      this.messages.push({ sender: 'bot', text: response.reply });
      this.scrollToBottom();
    });

    // setTimeout(() => {
    //   this.messages.push({ sender: 'bot', text: this.getBotResponse(messageText) });
    //   this.scrollToBottom();
    // }, 300);
  }

  private getBotResponse(text: string): string {
    const normalized = text.toLowerCase();

    if (normalized.includes('login')) {
      return 'To login, enter your registered email and password and click Login.';
    }

    if (normalized.includes('register') || normalized.includes('signup') || normalized.includes('sign up')) {
      return 'To register, fill out the signup form with your details and click Sign Up.';
    }

    if (normalized.includes('password')) {
      return 'Your password should be at least 5 characters and no more than 10 characters.';
    }

    if (normalized.includes('email')) {
      return 'Use a valid email address like user@example.com.';
    }

    if (normalized.includes('help') || normalized.includes('support')) {
      return 'I can help with login, registration, and account questions. What would you like to know?';
    }

    return 'I am here to help! Ask me about login, registration, passwords, or account setup.';
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatWindow?.nativeElement) {
        this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
      }
    });
  }
}
