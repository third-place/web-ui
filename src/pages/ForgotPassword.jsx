import { Button } from '@mui/material';
import { postJSON, putJSON } from '@tkrotoff/fetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import Container from '../components/Container';
import PaperContainer from '../components/PaperContainer';
import TextInput from '../components/TextInput';
import { endpoints } from '../utils/config';
import { useLogin } from '../hooks/login';

export default function ForgotPassword() {
  const params = new URLSearchParams(document.location.search);
  const [email, setEmail] = useState(params.get("email") ?? "");
  const [code, setCode] = useState(params.get("code") ?? "");
  const [password, setPassword] = useState('');
  const [readyForPassword, setReadyForPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const login = useLogin();

  const tryForgotPassword = async (event) => {
    event.preventDefault();
    if (readyForPassword && !error) {
      try {
        await putJSON(`${endpoints.user}/forgot-password`, {
          user: {
            email,
            password,
          },
          code,
        });
        await login(email, password);
        setCompleted(true);
        navigate("/");
      } catch {
        setError(false);
      }
      return;
    }
    setReadyForPassword(false);
    setError(false);
    try {
      await postJSON(`${endpoints.user}/forgot-password`, {email});
      setSubmitted(true);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (email && code) {
      setReadyForPassword(true);
    }
  }, []);

  return (
    <Container title="Account Recovery">
      { submitted && !completed && (
        <Alert severity="info">
          A password reset request has been submitted. Please check your email click the link provided in order to finish resetting your password.
        </Alert>
      )}
      { completed && (
        <Alert severity="success">
          Your password has been successfully reset!
        </Alert>
      )}
      { error && (
        <Alert severity="error">
          An error occurred, is that email address registered?
        </Alert>
      )}
      {!submitted && (
        <PaperContainer>
          <form onSubmit={tryForgotPassword}>
            <div>
              <TextInput
                label="Email Address"
                variant="outlined"
                value={email}
                onChangeValue={setEmail}
                style={{width: 400}}
                disabled={readyForPassword}
              />
            </div>
            { readyForPassword && (
              <div>
                <TextInput
                  label="Confirmation Code"
                  variant="outlined"
                  value={code}
                  onChangeValue={setCode}
                  style={{width: 400}}
                />
                <TextInput
                  label="New Password"
                  variant="outlined"
                  value={password}
                  onChangeValue={setPassword}
                  type="password"
                  style={{width: 400}}
                />
              </div>
            )}
            <div>
              <Button
                variant="contained"
                type="submit"
                disabled={completed}
              >
                Submit Password Reset Request
              </Button>
            </div>
          </form>
        </PaperContainer>
      )}
    </Container>
  );
}
