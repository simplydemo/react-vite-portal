// Signup.tsx
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const SignupDemo: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // 예시: 폼 데이터 콘솔 출력 (실제 구현에서는 서버 전송 등을 수행)
        console.log({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        boxShadow: 3,
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                        회원가입
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            {
                                // xs={12} sm={6}
                            }
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="이름"
                                    autoFocus
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="성"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 20 }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid size={{ xs: 12}}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid size={{ xs: 12}}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="비밀번호 확인"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem' }}
                        >
                            가입하기
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid>
                                <Link href="#" variant="body2">
                                    이미 계정이 있으신가요? 로그인하기
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignupDemo;
