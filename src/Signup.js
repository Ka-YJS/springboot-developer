import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {signup} from "./service/ApiService";
import {Link} from "react-router-dom"
//Link 컴포넌트 : a태그와 비슷한 역할을 하며, 리다이렉트할 때 사용됨

function Signup(){
    const handleSubmit = (event) => {
        event.preventDefault();
        //오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");

        signup({username:username, password:password})
            .then((response) => {
                //계정생성 성공 시 login페이지로 리디렉트
                window.location.href="/login";
            });
    };

    return(
//Container는 기본적으로 div로 렌더링이 되지만, component속성을 이용해 다른 태그로 바꿀 수 있음
        <Container component="main" maxWidth="xs" style={{maginTop:"8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                {/* spacing : 간격을 의미하며, 1당 8px임 */}
                    <Grid item xs = {12}>
                        {/* 화면에 보이는 크기는 h5지만 실제태그는 h1임 */}
                        <Typography component="h1" variant="h5">
                            계정생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required//필수로 입력해야 함
                            fullWidth//부모의 너비를 100%만큼 쓰겠다는 의미
                            id="username"
                            label="아이디"
                            autoFocus/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            id="password"
                            label="패스워드"
                            type="password"
                            autoComplete="current=password"/>
                    </Grid>
                    {/* 비밀번호 */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                                계정생성
                            </Button>
                    </Grid>
                </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to = "/login" variant="body2">
                            이미 계정이 있습니까? 로그인하세요</Link>
                        </Grid>
                    </Grid>
            </form>
        </Container>
    );



}//Signup

export default Signup;

