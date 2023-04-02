import { useEffect } from 'react';
import { useAppSelector } from '../hooks';
import { useLocation, useNavigate } from 'react-router-dom';

export function useAppNavigate() {
  const location = useLocation();
  const navigate = useNavigate();
  const authorized = useAppSelector((state) => state.auth.authorized);

  useEffect(() => {
    const authParams = '/auth';
    if (authorized && location.pathname.startsWith(authParams)) {
      navigate('posts');
    }
  }, [authorized, location.pathname, navigate]);
}
