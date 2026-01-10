module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2a2a",
        muted: "#5b6b6b",
        accent: "#d96c4d",
        "accent-2": "#1f6f78",
        paper: "#fffdf8",
        "paper-2": "#f7f1e6",
        "bg-1": "#f6f2e8",
        "bg-2": "#e7f1ef"
      },
      fontFamily: {
        display: ["Nanum Myeongjo", "Noto Serif KR", "serif"],
        body: ["Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(28, 38, 38, 0.12)"
      },
      borderRadius: {
        lg: "18px",
        md: "12px"
      }
    }
  }
};
