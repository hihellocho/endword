//우리말 샘 사전 API 가져오기

export const dictionary = async (startChar) => {
  const API_KEY="CBF8510BC63683051DEA582039E61D82";
  const base = "https://opendict.korean.go.kr/api/search";
  const params = new URLSearchParams({
    key: API_KEY,
    q: startChar,
    req_type: "json",
    part: "word",
    advanced: "y",
    sort: "popular",
    num: "20",
    pos: "1",        // 명사
    method: "start", // 시작 글자
    target: "1",      // 표제어
    type1: "word"
  });

  const originURL = `${base}?${params.toString()}`;
  console.log(originURL);
  //브라우저 보안이 강화되있어서. 로컬호스트에서 가져오면 실행을 안시켜줘. 그래서 보안기능 약화되는 걸 추가해서 사용. 개발용으로 확인되야해서  넣어줌. ┓
  const proxyURL = `https://corsproxy.io/?${encodeURIComponent(originURL)}`;

  //깃에 올릴때는 보안설정 안해야해서
  //  const proxyURL = originURL;

  //오류체크하는
  try{
    const res = await fetch(proxyURL);
    if(!res.ok){
      throw new Error("API응답오류", res.status);
    }
    const data = await res.json();
    // 조건 : -하이픈이 없고, 2글자 이상인 단어 배열로
    const filterData = data.channel.item.filter((item)=>{
      return !item.word.includes('-') && item.word.length >= 2;
    });
    const word = filterData[0].word;
    return word;
  } catch(err){
    console.log("API오류",err);
    return null;
  }
};

// export default dictionary; 리턴해줄게 없어서 삭제