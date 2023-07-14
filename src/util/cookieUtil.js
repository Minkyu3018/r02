import { Cookies } from "react-cookie";


const cookies = new Cookies()

// 이름, 값, 유지시간
export const setCookie = (cookieName, value, days) => {

  const expires = new Date()
  //날짜값 생성
  expires.setUTCDate(expires.getUTCDate() + days);

  // 경로를  " / " 로만 잡아줘야 전체 경로에서 사용 가능함
  cookies.set(cookieName, value, { path: "/", expires:expires})

}

export const getCookie = (cookieName) => {
  
  return cookies.get(cookieName)

}

export const removeCookie = (cookieName, path="/") => {

  cookies.remove(cookieName, path=path)
}