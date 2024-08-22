import axios from 'axios';
import Swal from 'sweetalert2';

// status code가 에러일 경우, 중간에서 에러를 처리해줄 수 있는 코드 작성
// axios 인터셉터를 사용하여 요청과 응답을 가로채고, 에러를 중앙에서 처리 가능

// axios 인스턴스 생성
export const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // 백엔드 API 기본 URL(baseURL)
    timeout: 1000, // 요청 타임아웃 시간 설정
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 쿠키를 서버로 전송할 수 있도록 설정
});

// 요청 인터셉터
// 아래와 같이 설정해주면 axios 요청시 자동으로 header에 토큰을 넣어서 보내준다.
// 백엔드에서 받아온 JWT Access Token을 request header에 담아서 보내주는 코드
axiosInstance.interceptors.request.use(
    (config) => {
        // 요청이 보내지기 전에 수행할 작업
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 요청 에러 발생 시 수행할 작업
        return Promise.reject(error);
    },
);

// 응답 인터셉터
// 백엔드로부터 오는 response를 중간에 처리해주는 미들웨어 역할
// 400번대 에러들에 대한 에러 핸들링
axiosInstance.interceptors.response.use(
    (response) => {
        // 응답 성공적으로 수신 후 수행할 작업
        return response;
    },
    (error) => {
        // 응답 에러 처리
        if (error.response) {
            // 서버가 응답한 경우 (4xx, 5xx 에러)
            const status = error.response.status;
            if (status === 401) {
                console.log('Unauthorized! Redirecting to login...');
                // 필요 시 로그인 페이지로 리다이렉트 처리
            } else if (status === 404) {
                console.log('Not Found!');
            } else if (status >= 500) {
                console.log('Server error!');
            }
        } else if (error.request) {
            // 요청은 완료되었으나 응답을 받지 못한 경우
            console.log('No response from the server');
        } else {
            // 그 외의 에러 처리
            console.log('Error setting up the request:', error.message);
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
