# AteBall 🍽️🎱
A tiny iOS app that picks one nearby restaurant in ~30s. Answer a few quick questions, shake, get a decisive rec (Creative Labs F25)

## Repos
- `/ios` — SwiftUI app
- `/api` — tiny backend (serverless or FastAPI)
- `/docs` — specs & flows

## Quick start
- iOS: Xcode 15+, iOS 17+. Open `/ios/AteBall.xcodeproj`.
- API: see `/api/README.md` and copy `.env.example` → `.env`.

## Decisions
- iOS: SwiftUI (MVVM)
- Data: Google Places via backend proxy
- Analytics: Firebase (dev first)
