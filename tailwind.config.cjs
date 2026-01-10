module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./public/app.js"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        accent: "#2563eb",
        "accent-2": "#0f766e",
        paper: "#ffffff",
        "paper-2": "#f1f5f9",
        "bg-1": "#f8fafc",
        "bg-2": "#eef2f7"
      },
      fontFamily: {
        display: ["Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
        body: ["Pretendard", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        lg: "16px",
        md: "12px"
      }
    }
  },
  plugins: []
};
