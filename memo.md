# 프론트엔드 (React) 구현

- React 애플리케이션에서 로그인 폼을 만들고 사용자 이름과 비밀번호를 입력 받습니다.
- 로그인 요청을 백엔드로 보내고 JWT 토큰을 받습니다.
- 받은 토큰을 로컬 스토리지 또는 쿠키에 저장합니다.
- 인증이 필요한 요청을 보낼 때마다 헤더에 JWT 토큰을 포함시켜 백엔드에 전달합니다.
- <https://usehooks.com/uselocalstorage>

## 코드 예시

React 측에서 JWT(JSON Web Tokens)를 구현하려면 다음 단계를 따를 수 있습니다:

1. JWT 토큰 저장:

   - JWT 토큰을 로그인 성공 후 서버에서 받아와서 클라이언트에서 저장해야 합니다. 이를 위해 일반적으로 브라우저의 로컬 스토리지(localStorage)나 세션 스토리지(sessionStorage)에 저장합니다.
   - 예를 들어, 로그인 요청을 보낸 후 서버로부터 받은 JWT 토큰을 로컬 스토리지에 저장할 수 있습니다.

   ```javascript
   // 로그인 요청 후 토큰 저장
   fetch('/login', {
     method: 'POST',
     body: JSON.stringify({ username, password }),
     headers: {
       'Content-Type': 'application/json',
     },
   })
     .then((response) => response.json())
     .then((data) => {
       localStorage.setItem('token', data.token); // 토큰 저장
     });
   ```

2. JWT 토큰 사용:

   - 인증이 필요한 API 요청을 보낼 때, HTTP 요청 헤더에 JWT 토큰을 포함시켜 서버로 전송합니다.
   - 일반적으로 `Authorization` 헤더에 Bearer 스키마와 함께 토큰을 넣습니다.

   ```javascript
   const token = localStorage.getItem('token');

   fetch('/secure-data', {
     method: 'GET',
     headers: {
       Authorization: `Bearer ${token}`, // JWT 토큰 전송
     },
   })
     .then((response) => response.json())
     .then((data) => {
       // 요청에 대한 응답 처리
     })
     .catch((error) => {
       // 인증 실패 또는 다른 에러 처리
     });
   ```

3. 로그아웃:

   - 로그아웃을 구현할 때, 클라이언트에서 저장된 JWT 토큰을 삭제해야 합니다.

   ```javascript
   // 로그아웃 버튼 클릭 시 토큰 삭제
   const handleLogout = () => {
     localStorage.removeItem('token'); // 토큰 삭제
     // 기타 로그아웃 관련 동작 수행
   };
   ```

4. 토큰 만료 관리:

   - JWT 토큰은 만료 시간을 가지며, 토큰이 만료되면 서버에서 인증을 거부합니다. 클라이언트 측에서 토큰 만료를 관리하고, 만료된 토큰을 감지하면 다시 로그인하도록 사용자에게 요청할 수 있습니다.

JWT를 React 애플리케이션에서 구현하는 것은 클라이언트 측의 작업입니다. 서버 측에서는 JWT를 발급하고 검증하는 부분을 구현해야 합니다. 이 구현은 Spring Security 또는 다른 백엔드 라이브러리를 사용하여 처리할 수 있습니다.

JWT를 사용한 인증은 클라이언트와 서버 간의 효율적인 인증 방법 중 하나이며, 토큰을 안전하게 저장하고 전송해야 합니다. 또한, 토큰을 만료 시간을 설정하여 보안을 강화할 수 있습니다.
