# Usage Guide

이 문서는 Next.js Boilerplate를 사용할 때 필요한 가이드입니다.  
설치와 실행은 [README.md](./README.md)를 참고하세요.

---

## 🧩 컴포넌트 추가

새로운 shadcn/ui 컴포넌트를 추가하려면:

```bash
pnpm ui add <component-name>
```

---

## 💾 Storage 서비스

타입 안전성과 에러 처리를 위해 제공된 storage 래퍼를 사용하세요.

```typescript
import { localStorage } from "@/services/local-storage"
import { sessionStorage } from "@/services/session-storage"

// 데이터 저장
localStorage.setItem("key", { data: "value" })
sessionStorage.setItem("temp", "temporary data")

// type-safe한 데이터 가져오기
const data = localStorage.getItem<{ data: string }>("key")
const temp = sessionStorage.getItem<string>("temp")

// 사용 가능 여부 확인
if (localStorage.available) {
  // localStorage 사용 가능
}
```

---

## 🪵 로깅

`console.log` 대신 logger 서비스를 사용하세요.

```typescript
import { logger } from "@/services/logger"

logger.info("애플리케이션 시작됨")
logger.warn("이것은 경고입니다")
logger.error("문제가 발생했습니다", error)
logger.debug("디버그 정보", data)
```

## 🧹 코드 품질 가이드

이 보일러플레이트는 일관된 코드 품질 유지를 위해 몇 가지 규칙을 강제합니다.

- ESLint 규칙

  Next.js 권장 설정 + TypeScript + Prettier 기반.
  
  서비스 사용 패턴을 강제하는 커스텀 규칙 포함.

- Console 금지

  직접적인 console.log 사용은 금지. 반드시 logger 서비스를 사용하세요.

- Storage 접근 제한

  localStorage나 sessionStorage 직접 접근 금지. 반드시 래퍼 서비스를 사용하세요.

---

## ⚙️ 설정

### Tailwind CSS
- **버전**: v4
- **기능**: CSS 변수, 다크 모드 지원
- **플러그인**: 애니메이션, 폼 스타일

### ESLint
- **규칙**: Next.js 권장 + TypeScript + Prettier
- **커스텀 규칙**: 서비스 사용 패턴 강제
- 일부 서비스 파일에 한해 완화된 규칙 적용

### Prettier
- **Import 정렬**: React → Next → 서드파티 → 로컬
- **Tailwind 플러그인**: 클래스 자동 정렬
- **설정**: 2 space, 세미콜론 없음, 싱글 쿼트
