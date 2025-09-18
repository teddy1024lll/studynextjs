import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      // 可选：将用户数据同步到 Sanity
      return true; // 允许登录
    },
    async redirect({ url, baseUrl }) {
      // 登录后重定向到首页
      return baseUrl; // http://localhost:3000/
    },
  },
});
