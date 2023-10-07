import "../styles/signUp.css";

function SignUp(){
    return(
        <div className="signUp">
            <h1>파티참가서</h1>
            <div id="personal_info">
                <div className="personal_info" id="labels">
                    <label htmlFor="email">강 원 대  메 일: </label>
                    <label htmlFor="password">비 밀 번 호: </label>
                    <span></span>
                    <label htmlFor="nickname">닉 네 임: </label>
                    <label htmlFor="self-intro">자 기 소 개  글: </label>
                </div>
                <div className="personal_info" id="inputs">
                    <div id="email_input">
                        <input
                            class="underline"
                            id="email"
                            type="text"
                            pattern="[0-9a-zA-Z]"
                            required
                        />
                        <input value="@kangwon.ac.kr" disabled/>
                    </div>
                    <input
                        type="password"
                        id="password"
                        pattern="[a-zA-Z0-9]{8,16}"
                        required
                    />
                    <span></span>
                    <input
                        type="text"
                        id="nickname"
                        required
                    />
                    <textarea id="self-intro"/>
                </div>
                <div className="personal_info" id="validitys">
                    <div>메일 확인</div>
                    <div>비번확인</div>
                    <span></span>
                    <div>닉네임확인</div>
                    <div>자기소개확인</div>
                </div>
            </div>
            <div className="article">
                <p>위 사람은 강원대학교 파티(이하 강대팟)에 회원 가입을 위한 개인정보 수집·이용에 동의합니다. 
                    미동의 시 강대팟 사이트 이용에 제약이 있을 수 있습니다.</p>
                <button>회원가입</button>
            </div>
        </div>
    );
}

export default SignUp;