import axiosInstance from './index';

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error('로그인 요청 에러:', error);
    throw error; // 에러 발생 시 호출하는 쪽에서 처리할 수 있도록 재던짐
  }
};
