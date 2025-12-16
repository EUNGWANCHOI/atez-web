# Atez Web

Atez Web은 캐릭터 기반 AI 채팅 서비스를 위한 프론트엔드 애플리케이션이다.
Atez Web is a frontend application for a character-based AI chat service.

Atez Server와 연동되어 캐릭터와의 대화를 실시간으로 제공한다.
It connects to Atez Server to provide real-time character conversations.

단순한 메시지 송수신 UI가 아니라, 캐릭터의 말투와 연출을 살리는 데 초점을 둔다.
Rather than a simple chat UI, it focuses on preserving character tone and presentation.

---

## 개요 (Overview)

Atez Web은 React와 Vite 기반으로 구축된 단일 페이지 애플리케이션이다.
Atez Web is a single-page application built with React and Vite.

유저는 텍스트 입력을 통해 캐릭터와 대화하며, 응답은 말풍선 형태로 출력된다.
Users interact with the character through text input, with responses displayed as chat bubbles.

캐릭터의 행동 묘사(*...*)는 시각적으로 구분되어 표현된다.
Character action descriptions (*...*) are visually distinguished in the UI.

---

## 주요 기능 (Core Features)

### 채팅 인터페이스

Chat Interface

유저와 캐릭터의 메시지를 말풍선 형태로 구분해 표시한다.
Messages from the user and the character are displayed as distinct chat bubbles.

엔터 키로 메시지를 전송하고, Shift+Enter로 줄바꿈이 가능하다.
Messages are sent with Enter, while Shift+Enter inserts a new line.

---

### 자동 확장 입력창

Auto-Expanding Input

입력 내용 길이에 따라 textarea 높이가 자동으로 조절된다.
The textarea automatically expands based on input length.

불필요한 스크롤 없이 자연스러운 입력 경험을 제공한다.
This provides a smooth typing experience without unnecessary scrolling.

---

### 타이핑 인디케이터

Typing Indicator

서버 응답을 기다리는 동안 캐릭터 타이핑 애니메이션을 표시한다.
A typing animation is shown while waiting for the server response.

이를 통해 캐릭터가 “응답 중”이라는 느낌을 준다.
This gives the impression that the character is actively responding.

---

### 캐릭터 행동 표현

Character Action Rendering

응답 텍스트 내 *행동 묘사*를 감지해 별도 스타일로 렌더링한다.
Action descriptions wrapped in * are detected and rendered with a separate style.

이는 캐릭터 연출과 몰입감을 강화한다.
This enhances character expression and immersion.

---

### API 연동 구조

API Integration

프론트엔드는 직접 OpenAI를 호출하지 않는다.
The frontend does not call OpenAI directly.

모든 요청은 Atez Server를 통해 처리된다.
All requests are routed through Atez Server.

환경 변수 기반으로 API URL과 토큰을 관리한다.
API URL and client tokens are managed via environment variables.

---

## 기술 스택 (Tech Stack)

React를 사용해 UI를 구성했다.
The UI is built with React.

Vite를 사용해 빠른 개발 환경을 구성했다.
Vite is used for fast development and builds.

lucide-react를 사용해 아이콘을 처리한다.
lucide-react is used for icon rendering.

---

## 프로젝트 구조 (Project Structure)

```
src/
 ├─ components/
 │   ├─ ChatWindow.jsx      # 채팅 UI 및 입력 처리
 │   └─ MessageBubble.jsx   # 메시지 말풍선 컴포넌트
 ├─ pages/
 │   └─ ChatPage.jsx        # 채팅 페이지 레이아웃
 ├─ api/
 │   └─ index.js            # 서버 통신 로직
 ├─ assets/
 │   └─ kmj.png             # 캐릭터 이미지
 ├─ index.css               # 전역 스타일
 ├─ App.jsx                 # 앱 엔트리
 └─ main.jsx
```

---

## 환경 변수 (Environment Variables)

`.env` 파일을 생성한다.
Create a `.env` file.

```
VITE_API_URL=http://localhost:3000/chat
VITE_CLIENT_TOKEN=your_client_token
```

---

## 실행 방법 (Running the Project)

의존성을 설치한다.
Install dependencies.

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:5173` 에서 실행된다.
The development server runs at `http://localhost:5173` by default.

---

## 프로젝트 목적 (Purpose)

이 프로젝트는 캐릭터 기반 AI 서비스의 사용자 경험을 실험한다.
This project explores user experience for character-based AI services.

백엔드에서 설계된 감정, 기억, 상황 개념을
프론트엔드에서 자연스럽게 전달하는 것이 목표다.
Its goal is to naturally convey backend-driven emotion, memory, and context to the user.

---

## Notes

이 레포지토리는 프론트엔드에만 집중한다.
This repository focuses solely on the frontend.

AI 로직과 상태 관리는 Atez Server에서 처리한다.
AI logic and state management are handled by Atez Server.

---

## Author

최은관
Eunkwan Choi
