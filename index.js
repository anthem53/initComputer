list = {
    "반디집" : "https://kr.bandisoft.com/bandizip/"
    ,"VSCode" : "https://code.visualstudio.com/download"
    ,"FastStone (이미지뷰어)" : "https://www.faststone.org/"
    ,"다음팟 플레이어 (구버전)" : "https://drive.google.com/file/d/1c6a7oZ-9tagsOh1Qc7oQziI6FLC-66FA/view?usp=sharing"
    , "스팀"  : "https://store.steampowered.com/about/"
    , "팀뷰어" : "https://www.teamviewer.com/ko/download/free-download-with-license-options/" 
    , "Git Bash" : "https://git-scm.com/downloads" 
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