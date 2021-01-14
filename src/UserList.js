import React from 'react';

function User({user}) {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id : 1,
            username : 'kys',
            email : 'kys@naver.com'
        },
        {
            id : 2,
            username : 'kys1',
            email : 'kys1@naver.com' 
        },
        {
            id : 3,
            username : 'kys2',
            email : 'kys2@naver.com'
        },
    ];

    return (
        <div>
            {
                // Map : 자바스크립트 배열 객체의 내장함수
                // Map은 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것입니다.
                // users는 상단에 선언한 배열형 객체
                // user는 내가 임의로 정한 인자명 즉, users의 데이터를 User 컴포넌트에 인자(user)로 넘긴다. 
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    );
}

export default UserList;
    