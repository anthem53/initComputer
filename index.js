list = {
    "반디집" : "https://kr.bandisoft.com/bandizip/"
    ,"VSCode" : "https://code.visualstudio.com/download"
    ,"FastStone (이미지뷰어)" : "https://www.faststone.org/"
    ,"다음팟 플레이어 (구버전)" : "https://drive.google.com/file/d/1c6a7oZ-9tagsOh1Qc7oQziI6FLC-66FA/view?usp=sharing"
    , "스팀"  : "https://store.steampowered.com/about/"
    , "Git Bash" : "https://git-scm.com/downloads" 
    , "구글 원격 프로그램(주소창 메시지 확인)" : "./index.html?message=구글 원격 프로그램 다운받으셈. 팀뷰어 시간 제한 있어서 별로임."
    , "파일질라" : "https://www.filezilla.kr/"
    , "Everything 설치 (F8로 단축키 지정하기)" : "https://www.voidtools.com/ko-kr/downloads/"
    ,"깃 초기 실행시 실행해야할 명령어" : "./gitCommand.html"
}

// <li class="list-group-item" ><a target='_blank' href="">팀뷰어</a></li>



main = {
    init : () => {
        const listTag = document.getElementById("linkListId")

        for (const key in list){
            const value = list[key]
            let listElem = document.createElement("li")
            listElem.className = "list-group-item"

            let listLink = document.createElement("a")
            let listText = document.createTextNode(key);
            listLink.setAttribute("href",value)
            
            listLink.appendChild(listText)
            listElem.appendChild(listLink)
            listTag.appendChild(listElem)
        }
    }
}


main.init()