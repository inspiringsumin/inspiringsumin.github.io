const quotes = [
  { quote: "노력을 대신할 수 있는 것은 없습니다.", author: "토마스 에디슨" },
  {
    quote:
      "진짜 어려움은 극복할 수 있습니다. 정복할 수 없는 것은 상상 속의 것들뿐이다.",
    author: "시어도어 N. 베일",
  },
  {
    quote: "성적이나 결과는 행동이 아니라 습관입니다.",
    author: "아리스토텔레스",
  },
  {
    quote: "미래는 꿈의 아름다움을 믿는 자의 것입니다.",
    author: "엘리너 루즈벨트",
  },
  {
    quote: "끝날 때까지 항상 불가능해 보인다.",
    author: "넬슨 만델라",
  },
  {
    quote:
      "나는 내 인생에서 계속해서 실패하고 또 실패했습니다. 그리고 그것이 내가 성공하는 이유입니다.",
    author: "마이클 조던",
  },
  {
    quote:
      "세상에서 가장 중요한 일의 대부분은 도움이 전혀 되지 않는 것처럼 보일 때 계속 노력한 사람들에 의해 이루어졌습니다.",
    author: "데일 카네기",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
